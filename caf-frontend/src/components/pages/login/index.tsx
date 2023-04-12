import { Link } from "react-router-dom";
import { ButtonLogin, InputLogin, StyledLoginBox, StyledLoginPage } from "./styles";

export function LoginPage() {
  return (
    <>
      <StyledLoginPage>
        <StyledLoginBox>
        <h2>FAÇA SEU LOGIN</h2>
        <form>
          <div>
            <h3>E-mail</h3>
            <InputLogin type="text" placeholder="Digite seu e-mail" />
            <h3>Senha</h3>
            <InputLogin type="password" placeholder="Digite sua senha" />
          </div>
          <ButtonLogin>CONFIRMAR</ButtonLogin>
          <h4>Ainda não possui login?</h4>
          {/* <Link to="" >Registre-se</Link> */}
        </form>
        </StyledLoginBox>
      </StyledLoginPage>
    </>
  );
}
