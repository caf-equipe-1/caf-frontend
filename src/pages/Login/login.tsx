import { useNavigate } from "react-router";
import {
  ButtonConfirm,
  ButtonRegister,
  InputLogin,
  StyledLoginBox,
  StyledLoginPage,
} from "./styles";
import { useState } from "react";
import { EmailLoginDto } from "../../domain/dtos/login/emailLogin-dto";
import { makeEmailLoginRouterFactory } from "../../infra/api/factories/login/emailLogin-router-factory";

export function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<EmailLoginDto>({
    email: "",
    password: "",
  });

  function handleLogin() {
    const loginRouter = makeEmailLoginRouterFactory();

    loginRouter.login(loginData);
  }

  return (
    <>
      <StyledLoginPage>
        <StyledLoginBox>
          <h2>LOGIN</h2>
          <div>
            <div>
              <h3>E-mail</h3>
              <InputLogin
                onChange={(event) =>
                  setLoginData({ ...loginData, email: event.target.value })
                }
                type="text"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <h3>Senha</h3>
              <InputLogin
                onChange={(event) =>
                  setLoginData({ ...loginData, password: event.target.value })
                }
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <ButtonConfirm onClick={() => handleLogin()}>
              CONFIRMAR
            </ButtonConfirm>
            <h4>Ainda não possui login?</h4>
            <ButtonRegister onClick={() => navigate("register")}>
              Registre-se
            </ButtonRegister>
          </div>
        </StyledLoginBox>
      </StyledLoginPage>
    </>
  );
}
