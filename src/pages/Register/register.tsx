import { useNavigate } from "react-router";
import { ButtonRegister } from "./styles";
import { makeUserRouterFactory } from "../../infra/api/factories/user/user-router-factory";
import { useState } from "react";
import { CreateUserDto } from "../../domain/dtos/user/createUser-dto";
import { Form } from "../../components/Form";

export function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<CreateUserDto>({
    name: "",
    email: "",
    cpf: "",
    password: "",
    photo: "",
  });

  function handleRegistration() {
    const userRegistrationRouter = makeUserRouterFactory();

    userRegistrationRouter.create(userInfo).then(function (data) {
      if (data.error) {
        alert(data.message);
      } else {
        alert("Registrado com sucesso!");
        navigate("/");
      }
    });
  }

  function onNameChange(inputName: string) {
    setUserInfo({ ...userInfo, name: inputName });
  }

  function onEmailChange(inputEmail: string) {
    setUserInfo({ ...userInfo, email: inputEmail });
  }

  function onCpfChange(inputCpf: string) {
    setUserInfo({ ...userInfo, cpf: inputCpf.toString() });
  }

  function onPasswordChange(inputPassword: string) {
    setUserInfo({ ...userInfo, password: inputPassword });
  }

  function onImageChange(convertedImage: string) {
    setUserInfo({ ...userInfo, photo: convertedImage });
  }

  return (
    <Form
      title="REGISTRO"
      fields={[
        {
          label: "Nome",
          inputType: "text",
          placeholder: "Digite o seu nome",
          onChangeCallback: onNameChange,
        },
        {
          label: "Email",
          inputType: "text",
          placeholder: "Digite o seu email",
          onChangeCallback: onEmailChange,
        },
        {
          label: "CPF",
          inputType: "number",
          placeholder: "Digite o seu CPF",
          onChangeCallback: onCpfChange,
        },
        {
          label: "Senha",
          inputType: "password",
          placeholder: "Digite a sua senha",
          onChangeCallback: onPasswordChange,
        },
        {
          label: "Foto",
          inputType: "file",
          placeholder: "",
          onChangeCallback: onImageChange,
        },
      ]}
      buttons={[
        {
          label: "CONFIRMAR",
          onClickCallback: handleRegistration,
          color: "white",
          backGroundColor: "MidnightBlue",
        },
      ]}
      finalContent={
        <div>
          <h4>Já possui login?</h4>
          <ButtonRegister onClick={() => navigate("/")}>
            Faça login
          </ButtonRegister>
        </div>
      }
    />
  );
}
