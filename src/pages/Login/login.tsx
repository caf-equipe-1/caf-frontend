import {
  General,
  LoginFormLabel,
  LoginFormInput,
  LoginForm,
  LoginFormButton,
  LoginFormImg,
} from "./login.styles";
import CAFImg from "../../Img/CAFImg.jpg";
export default function Login() {
  return (
    <>
      <LoginFormImg src={CAFImg} alt="" />
      <General>
        <LoginForm>
          <LoginFormLabel>E-mail</LoginFormLabel>
          <LoginFormInput type="text" placeholder="insira seu Email" />
        </LoginForm>

        <LoginForm>
          <LoginFormLabel>Senha</LoginFormLabel>
          <LoginFormInput type="text" placeholder="insira sua senha" />
        </LoginForm>
        <LoginFormButton>Entrar</LoginFormButton>
      </General>
    </>
  );
}
