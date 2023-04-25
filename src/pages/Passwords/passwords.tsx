import { useEffect, useState } from "react";
import { FlexBody } from "../../components/flexBody";
import { Title } from "../../components/title";
import { HttpResponse } from "../../domain/types/http/httpResponse-dto";
import { makePasswordRouterFactory } from "../../infra/api/factories/password/password-router-factory";
import { Password } from "../../domain/entities/password/password-entity";
import { Card } from "../../components/card";
import { ActionsTitle } from "../../components/actionsTitle";
import { CreatePasswordDto } from "../../domain/dtos/password/createPassword-dto";
import { UpdatePasswordDto } from "../../domain/dtos/password/updatePassword-dto";
import { Modal } from "../../components/modal";
import { Form } from "../../components/Form";

export function Passwords() {
  const passwordRouter = makePasswordRouterFactory();
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [openCreationModal, setOpenCreationModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [createdPassword, setCreatedPassword] = useState<CreatePasswordDto>({
    name: "",
    password: "",
  });
  const [updatedPassword, setUpdatedPassword] = useState<UpdatePasswordDto>({
    name: "",
    password: "",
  });
  const [updatedPasswordId, setUpdatedPasswordId] = useState<string>("");

  function getPasswordsFromApi() {
    passwordRouter.getAll().then(function (response: HttpResponse<Password[]>) {
      if (response.body) {
        setPasswords(response.body);
      }
    });
  }

  function renderCards() {
    return passwords.map(function (password, index) {
      return (
        <Card
          title={password.name}
          entityId={password.id}
          content={[
            {
              label: "Senha",
              text: password.password,
              hide: true,
            },
          ]}
          key={index}
          deleteCallback={deletePassword}
          editCallback={openUpdatePasswordModal}
        />
      );
    });
  }

  function deletePassword(passwordId: string) {
    if (window.confirm("Deseja apagar essa senha?")) {
      passwordRouter
        .delete(passwordId)
        .then(function (response) {
          if (response.error) {
            alert(response.message);
          }
        })
        .finally(() => {
          getPasswordsFromApi();
        });
    }
  }

  function openCreatePasswordModal() {
    setCreatedPassword({
      name: "",
      password: "",
    });
    setOpenCreationModal(true);
  }

  function createPassword() {
    passwordRouter.create(createdPassword).then(function (response) {
      if (response.error) {
        alert(response.message);
      } else {
        setOpenCreationModal(false);
        getPasswordsFromApi();
      }
    });
  }

  function onNameChangeCreation(inputName: string) {
    setCreatedPassword({ ...createdPassword, name: inputName });
  }

  function onPasswordChangeCreation(inputPassword: string) {
    setCreatedPassword({ ...createdPassword, password: inputPassword });
  }

  function createPasswordForm() {
    return (
      <Form
        title="Adicionar Senha"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            placeholder: "Nome da senha",
            onChangeCallback: onNameChangeCreation,
          },
          {
            label: "Senha",
            inputType: "text",
            placeholder: "Senha",
            onChangeCallback: onPasswordChangeCreation,
          },
        ]}
        buttons={[
          {
            label: "Enviar",
            onClickCallback: createPassword,
            color: "white",
            backGroundColor: "LimeGreen",
          },
        ]}
      />
    );
  }

  function openUpdatePasswordModal(passwordId: string) {
    const foundPassword = passwords.find(function (item) {
      return item.id.toString() === passwordId.toString();
    });

    if (foundPassword) {
      setUpdatedPassword(foundPassword);
      setUpdatedPasswordId(passwordId);
    }

    setOpenUpdateModal(true);
  }

  function updatePassword() {
    passwordRouter
      .update(updatedPasswordId, updatedPassword)
      .then(function (response) {
        if (response.error) {
          alert(response.message);
        } else {
          setOpenUpdateModal(false);
          getPasswordsFromApi();
        }
      });
  }

  function onNameChangeUpdate(inputName: string) {
    setUpdatedPassword({ ...updatedPassword, name: inputName });
  }

  function onPasswordChangeUpdate(inputPassword: string) {
    setUpdatedPassword({ ...updatedPassword, password: inputPassword });
  }

  function updatePasswordForm() {
    return (
      <Form
        title="Editar Senha"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            placeholder: "Nome da senha",
            defaultValue: updatedPassword.name,
            onChangeCallback: onNameChangeUpdate,
          },
          {
            label: "Senha",
            inputType: "text",
            placeholder: "Senha",
            defaultValue: updatedPassword.password,
            onChangeCallback: onPasswordChangeUpdate,
          },
        ]}
        buttons={[
          {
            label: "Enviar",
            onClickCallback: updatePassword,
            color: "white",
            backGroundColor: "LimeGreen",
          },
        ]}
      />
    );
  }

  useEffect(function () {
    getPasswordsFromApi();
  }, []);

  return (
    <>
      <Title title="Senhas:" />
      <ActionsTitle createEntityCallback={openCreatePasswordModal} />
      <FlexBody components={renderCards()} />
      <Modal
        content={createPasswordForm()}
        show={openCreationModal}
        setShowCallback={setOpenCreationModal}
      />
      <Modal
        content={updatePasswordForm()}
        show={openUpdateModal}
        setShowCallback={setOpenUpdateModal}
      />
    </>
  );
}
