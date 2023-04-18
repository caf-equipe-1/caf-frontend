import { useState } from "react";
import {
  ButtonConfirm,
  ButtonRegister,
  InputLogin,
  StyledLoginBox,
  StyledLoginPage,
} from "./styles";

export default function Login() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleModal() {
    setIsOpen(!isOpen);
  }

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
            <ButtonRegister onClick={handleModal}>Registre-se</ButtonRegister>
          </form>
        </StyledLoginBox>
      </StyledLoginPage>
    </>
  );
}
