import { useNavigate } from "react-router";
import { ButtonRegister } from "./styles";
import { useState } from "react";
import { EmailLoginDto } from "../../domain/dtos/login/emailLogin-dto";
import { makeEmailLoginRouterFactory } from "../../infra/api/factories/login/emailLogin-router-factory";
import { Form } from "../../components/Form";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/user-slice";
import { addManyPasswordsStore } from "../../store/slices/password-slice";
import { addManyCardsStore } from "../../store/slices/card-slice";
import { addManyDocumentsStore } from "../../store/slices/document-slice";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState<EmailLoginDto>({
    email: "",
    password: "",
  });

  function handleLogin() {
    const loginRouter = makeEmailLoginRouterFactory();

    loginRouter.login(loginData).then(function (data) {
      if (data.error) {
        alert(data.message);
      } else {
        if (data.body) {
          dispatch(addUser(data.body.user));
          dispatch(addManyPasswordsStore(data.body.user.passwords));
          dispatch(addManyCardsStore(data.body.user.cards));
          dispatch(addManyDocumentsStore(data.body.user.documents));
        }
        alert("Login realizado com sucesso!");
        navigate("/services");
      }
    });
  }

  function onEmailChange(inputEmail: string) {
    setLoginData({ ...loginData, email: inputEmail });
  }

  function onPasswordChange(inputPassword: string) {
    setLoginData({ ...loginData, password: inputPassword });
  }

  return (
    <Form
      title="LOGIN"
      fields={[
        {
          inputType: "text",
          label: "E-mail",
          placeholder: "Digite seu e-mail",
          onChangeCallback: onEmailChange,
        },
        {
          inputType: "password",
          label: "Senha",
          placeholder: "Digite sua senha",
          onChangeCallback: onPasswordChange,
        },
      ]}
      buttons={[
        {
          label: "CONFIRMAR",
          color: "white",
          backGroundColor: "MidnightBlue",
          onClickCallback: handleLogin,
        },
      ]}
      finalContent={
        <div>
          <h4>Ainda não possui login?</h4>
          <ButtonRegister onClick={() => navigate("register")}>
            Registre-se
          </ButtonRegister>
        </div>
      }
    />
  );
}
