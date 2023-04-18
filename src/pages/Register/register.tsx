import { useNavigate } from "react-router";
import {
  ButtonConfirm,
  ButtonRegister,
  InputLogin,
  StyledLoginBox,
  StyledLoginPage,
} from "./styles";

export function Register() {
  const navigate = useNavigate();
  return (
    <>
      <StyledLoginPage>
        <StyledLoginBox>
          <h2>REGISTRO</h2>
          <form>
            <div>
              <h3>E-mail</h3>
              <InputLogin type="text" placeholder="Digite seu e-mail" />
            </div>
            <div>
              <h3>Senha</h3>
              <InputLogin type="text" placeholder="Digite sua senha" />
            </div>
            <ButtonConfirm>CONFIRMAR</ButtonConfirm>
            <h4>Já possui login?</h4>
            <ButtonRegister onClick={() => navigate("/")}>Login</ButtonRegister>
          </form>
        </StyledLoginBox>
      </StyledLoginPage>
    </>
  );
}
