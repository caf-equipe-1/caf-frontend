import {
  RegisterFormLabel,
  RegisterFormButton,
  RegisterFormInput,
  General,
  RegisterForm,
  RegisterFormImg,
  RegisterFormLabelCPF,
} from "./register.styles";
import CAFImg from "../../Img/CAFImg.jpg";

export function Register() {
  return (
    <>
      <RegisterFormImg src={CAFImg} alt="" />
      <General>
        <RegisterForm>
          <RegisterFormLabel>Nome</RegisterFormLabel>
          <RegisterFormInput placeholder="Insira eu nome" />
        </RegisterForm>

        <RegisterForm>
          <RegisterFormLabelCPF>CPF</RegisterFormLabelCPF>
          <RegisterFormInput placeholder="Insira eu nome" />
        </RegisterForm>

        <RegisterForm>
          <RegisterFormLabel>E-mail</RegisterFormLabel>
          <RegisterFormInput placeholder="Insira eu nome" />
        </RegisterForm>

        <RegisterForm>
          <RegisterFormLabel>Senha</RegisterFormLabel>
          <RegisterFormInput placeholder="Insira eu nome" />
        </RegisterForm>
        <RegisterFormButton>Cadastrar</RegisterFormButton>
      </General>
    </>
  );
}
