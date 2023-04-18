import { useNavigate } from "react-router";
import {
  ButtonConfirm,
  ButtonRegister,
  InputLogin,
  StyledLoginBox,
  StyledLoginPage,
} from "./styles";

export function Login() {
  const navigate = useNavigate();

  return (
    <>
      <StyledLoginPage>
        <StyledLoginBox>
          <h2>LOGIN</h2>
          <form>
            <div>
              <h3>E-mail</h3>
              <InputLogin type="text" placeholder="Digite seu e-mail" />
            </div>
            <ButtonConfirm>CONFIRMAR</ButtonConfirm>
            <h4>Ainda não possui login?</h4>
            <ButtonRegister onClick={() => navigate("register")}>
              Registre-se
            </ButtonRegister>
          </form>
        </StyledLoginBox>
      </StyledLoginPage>
    </>
  );
}
