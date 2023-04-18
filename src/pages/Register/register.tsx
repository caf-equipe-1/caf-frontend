import { useNavigate } from "react-router";
import {
  ButtonConfirm,
  ButtonRegister,
  InputRegister,
  StyledRegisterBox,
  StyledRegisterPage,
} from "./styles";
import { makeUserRouterFactory } from "../../infra/api/factories/user/user-router-factory";
import { useState } from "react";
import { CreateUserDto } from "../../domain/dtos/user/createUser-dto";
import { ImageInput } from "../../components/imageInput";

export function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<CreateUserDto>({
    name: "",
    email: "",
    cpf: "",
    password: "",
    photo: "",
  });

  function setImage(convertedImage: string) {
    setUserInfo({ ...userInfo, photo: convertedImage });
  }

  function handleRegistration() {
    const userRegistrationRouter = makeUserRouterFactory();

    userRegistrationRouter.create(userInfo).then(function (data) {
      if (data.error) {
        alert(data.message);
      }
    });
  }

  return (
    <StyledRegisterPage>
      <StyledRegisterBox>
        <h2>REGISTRO</h2>
        <form>
          <div>
            <h3>Nome</h3>
            <InputRegister
              type="text"
              placeholder="Digite seu nome"
              onChange={(event) =>
                setUserInfo({ ...userInfo, name: event.target.value })
              }
            />
          </div>
          <div>
            <h3>E-mail</h3>
            <InputRegister
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(event) =>
                setUserInfo({ ...userInfo, email: event.target.value })
              }
            />
          </div>
          <div>
            <h3>CPF</h3>
            <InputRegister
              type="number"
              placeholder="Digite seu CPF"
              onChange={(event) =>
                setUserInfo({ ...userInfo, cpf: event.target.value.toString() })
              }
            />
          </div>
          <div>
            <h3>Senha</h3>
            <InputRegister
              type="text"
              placeholder="Digite sua senha"
              onChange={(event) =>
                setUserInfo({ ...userInfo, password: event.target.value })
              }
            />
          </div>
          <div>
            <h3>Foto</h3>
            <ImageInput onChange={setImage} />
          </div>
          <ButtonConfirm onClick={() => handleRegistration()}>
            CONFIRMAR
          </ButtonConfirm>
          <h4>Já possui login?</h4>
          <ButtonRegister onClick={() => navigate("/")}>
            Faça login
          </ButtonRegister>
        </form>
      </StyledRegisterBox>
    </StyledRegisterPage>
  );
}
