import { ButtonConfirm, InputLogin } from "./styles";

export function FormRegister() {
  return (
    <div>
      <h2>Faça o seu cadastro</h2>
      <form>
        <div>
          <h3>Nome</h3>
          <InputLogin type="text" placeholder="Digite seu nome" />
          <h3>CPF</h3>
          <InputLogin type="text" placeholder="Digite seu CPF" />
          <h3>E-mail</h3>
          <InputLogin type="email" placeholder="Digite seu e-mail" />
          <h3>Senha</h3>
          <InputLogin type="password" placeholder="Digite sua senha" />
        </div>
        <ButtonConfirm>CONFIRMAR</ButtonConfirm>
      </form>
    </div>
  );
}
