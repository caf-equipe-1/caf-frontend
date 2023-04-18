import { useNavigate } from "react-router";
import {
  ButtonConfirm,
  ButtonRegister,
  InputRegister,
  StyledRegisterBox,
  StyledRegisterPage,
} from "./styles";

export function Register() {
  const navigate = useNavigate();
  return (
    <>
      <StyledRegisterPage>
        <StyledRegisterBox>
          <h2>REGISTRO</h2>
          <form>
            <div>
              <h3>E-mail</h3>
              <InputRegister type="text" placeholder="Digite seu e-mail" />
            </div>
            <div>
              <h3>Senha</h3>
              <InputRegister type="text" placeholder="Digite sua senha" />
            </div>
            <ButtonConfirm>CONFIRMAR</ButtonConfirm>
            <h4>Já possui login?</h4>
            <ButtonRegister onClick={() => navigate("/")}>
              Faça login
            </ButtonRegister>
          </form>
        </StyledRegisterBox>
      </StyledRegisterPage>
    </>
  );
}
