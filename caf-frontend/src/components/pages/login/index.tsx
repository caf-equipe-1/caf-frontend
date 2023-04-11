import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <>
      <div>
        <h2>FAÇA SEU LOGIN</h2>
        <form>
            <h3>E-mail</h3>
            <input type="text" placeholder="Digite seu e-mail" />
            <h3>Senha</h3>
            <input type="password" placeholder="Digite sua senha" />
            <button>ENVIAR</button>
            <h4>Ainda não possui login?</h4>
            {/* <Link to="" >Registre-se</Link> */}
        </form>
      </div>
    </>
  );
}
