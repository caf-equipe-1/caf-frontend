import { useNavigate } from "react-router";
import { ButtonRegister } from "./styles";
import { makeUserRouterFactory } from "../../infra/api/factories/user/user-router-factory";
import { useState, useRef } from "react";
import { CreateUserDto } from "../../domain/dtos/user/createUser-dto";
import { Form } from "../../components/Form";
import { Modal } from "../../components/modal";

export function Register() {
  const navigate = useNavigate();
  const [cameraModal, setCameraModal] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<CreateUserDto>({
    name: "",
    email: "",
    cpf: "",
    password: "",
    photo: "",
  });

  function handleRegistration() {
    const userRegistrationRouter = makeUserRouterFactory();

    userRegistrationRouter.create(userInfo).then(function (data) {
      if (data.error) {
        alert(data.message);
      } else {
        alert("Registrado com sucesso!");
        navigate("/");
      }
    });
  }

  function onNameChange(inputName: string) {
    setUserInfo({ ...userInfo, name: inputName });
  }

  function onEmailChange(inputEmail: string) {
    setUserInfo({ ...userInfo, email: inputEmail });
  }

  function onCpfChange(inputCpf: string) {
    setUserInfo({ ...userInfo, cpf: inputCpf.toString() });
  }

  function onPasswordChange(inputPassword: string) {
    setUserInfo({ ...userInfo, password: inputPassword });
  }

  function onImageChange(convertedImage: string) {
    setUserInfo({ ...userInfo, photo: convertedImage });
  }

  function openCamera() {
    setCameraModal(true);
  }

  function Camera() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setMediaStream(stream);
        }
      } catch (err) {
        alert("Verifique se sua câmera está devidamente conectada")
        console.error("Error accessing camera:", err);
      }
    };

    const stopCamera = () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setMediaStream(null);
      }
    };

    return (
      <div>
        {mediaStream ? (
          <div>
            <video ref={videoRef} autoPlay />
            <button onClick={stopCamera}>Stop Camera</button>
          </div>
        ) : (
          <button onClick={startCamera}>Start Camera</button>
        )}
      </div>
    );
  }

  return (
    <>
      <Form
        title="REGISTRO"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            placeholder: "Digite o seu nome",
            onChangeCallback: onNameChange,
          },
          {
            label: "Email",
            inputType: "email",
            placeholder: "Digite o seu email",
            onChangeCallback: onEmailChange,
          },
          {
            label: "CPF",
            inputType: "number",
            placeholder: "Digite o seu CPF",
            onChangeCallback: onCpfChange,
          },
          {
            label: "Senha",
            inputType: "password",
            placeholder: "Digite a sua senha",
            onChangeCallback: onPasswordChange,
          },
          // {
          //   label: "Foto",
          //   inputType: "file",
          //   placeholder: "",
          //   onChangeCallback: onImageChange,
          // },
        ]}
        buttons={[
          {
            label: "CADASTRAR FOTO",
            onClickCallback: openCamera,
            color: "white",
            backGroundColor: "Green",
          },
          {
            label: "CONFIRMAR",
            onClickCallback: handleRegistration,
            color: "white",
            backGroundColor: "MidnightBlue",
          },
        ]}
        finalContent={
          <div>
            <h4>Já possui login?</h4>
            <ButtonRegister onClick={() => navigate("/")}>
              Faça login
            </ButtonRegister>
          </div>
        }
      />
      <Modal
        content={Camera()}
        show={cameraModal}
        setShowCallback={setCameraModal}
      />
    </>
  );
}
