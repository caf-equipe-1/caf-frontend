import { useState } from "react";
import { Form } from "../../components/Form";
import { ActionsTitle } from "../../components/actionsTitle";
import { Title } from "../../components/title";
import { UpdateUserDto } from "../../domain/dtos/user/updateUser-dto";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../store/store";
import { makeUserRouterFactory } from "../../infra/api/factories/user/user-router-factory";
import { editUser } from "../../store/slices/user-slice";

export function Profile() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: RootState) => state.user.value);
  const [userInfo, setUserInfo] = useState<UpdateUserDto>({
    name: loggedUser.name,
    email: loggedUser.email,
    password: "",
    cpf: loggedUser.cpf,
    photo: loggedUser.photo,
  });

  function onNameChange(inputName: string) {
    setUserInfo({ ...userInfo, name: inputName });
  }

  function onEmailChange(inputEmail: string) {
    setUserInfo({ ...userInfo, email: inputEmail });
  }

  function onPasswordChange(inputPassword: string) {
    setUserInfo({ ...userInfo, password: inputPassword });
  }

  function onCpfChange(inputCpf: string) {
    setUserInfo({ ...userInfo, cpf: inputCpf });
  }

  function onPhotoChange(inputPhoto: string) {
    setUserInfo({ ...userInfo, photo: inputPhoto });
  }

  function handleEdition() {
    const userRouter = makeUserRouterFactory();

    userRouter.update(loggedUser.id, userInfo).then(function (data) {
      const updatedUser = userInfo;

      if (updatedUser.name?.trim() === "") {
        delete updatedUser.name;
      }

      if (updatedUser.email?.trim() === "") {
        delete updatedUser.email;
      }

      if (updatedUser.password?.trim() === "") {
        delete updatedUser.password;
      }

      if (updatedUser.cpf?.trim() === "") {
        delete updatedUser.cpf;
      }

      if (updatedUser.photo?.trim() === "") {
        delete updatedUser.photo;
      }

      if (data.error) {
        alert(data.message);
      } else {
        dispatch(editUser(userInfo));
        alert("Perfil atualizado!");
      }
    });
  }

  return (
    <>
      <Title title="Perfil" />
      <ActionsTitle />
      <Form
        title="Editar"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            placeholder: "Novo nome",
            onChangeCallback: onNameChange,
            defaultValue: userInfo.name,
          },
          {
            label: "Email",
            inputType: "email",
            placeholder: "Novo email",
            onChangeCallback: onEmailChange,
            defaultValue: userInfo.email,
          },
          {
            label: "Senha",
            inputType: "password",
            placeholder: "Nova senha",
            onChangeCallback: onPasswordChange,
          },
          {
            label: "CPF",
            inputType: "text",
            placeholder: "Novo CPF",
            onChangeCallback: onCpfChange,
            defaultValue: userInfo.cpf,
          },
          {
            label: "Foto",
            inputType: "file",
            placeholder: "",
            onChangeCallback: onPhotoChange,
          },
        ]}
        buttons={[
          {
            label: "Enviar",
            onClickCallback: handleEdition,
            color: "white",
            backGroundColor: "MidnightBlue",
          },
        ]}
      />
    </>
  );
}
