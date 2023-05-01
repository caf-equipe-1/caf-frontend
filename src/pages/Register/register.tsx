import { useNavigate } from "react-router";
import {
  ButtonRegister,
  StyledImage,
  StyledSendImageButton,
  StyledVideo,
} from "./styles";
import { makeUserRouterFactory } from "../../infra/api/factories/user/user-router-factory";
import { useRef, useState } from "react";
import { CreateUserDto } from "../../domain/dtos/user/createUser-dto";
import { Form } from "../../components/Form";
import { Modal } from "../../components/modal";
import { LoadingSpinner } from "../../components/loadingSpinner";

export function Register() {
  const navigate = useNavigate();
  const videoRef: any = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showCameraModal, setShowCameraModal] = useState<boolean>(false);
  const [showImageInputModal, setShowImageInputModal] =
    useState<boolean>(false);
  const [cameraStream, setCameraStream] = useState<any>();
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState<CreateUserDto>({
    name: "",
    email: "",
    cpf: "",
    password: "",
    photo: "",
  });

  function handleRegistration() {
    setLoading(true);
    const userRegistrationRouter = makeUserRouterFactory();

    userRegistrationRouter.create(userInfo).then(function (data) {
      if (data.error) {
        alert(data.message);
      } else {
        alert("Registrado com sucesso!");
        navigate("/");
      }
      setLoading(false);
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

  function openCameraModal() {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraStream(stream);
      })
      .catch(function (error) {
        alert("Verifique o acesso à sua câmera");
      });

    setShowCameraModal(true);
  }

  function openImageInputModal() {
    setShowImageInputModal(true);
  }

  function closeCameraModal(value: boolean) {
    if (cameraStream) {
      cameraStream.getTracks().forEach(function (track: any) {
        track.stop();
      });

      setCameraStream(null);
    }
    setShowCameraModal(value);
  }

  function captureImage() {
    const video: any = videoRef.current;
    const canvas: any = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL();
    setImage(dataUrl);
    onImageChange(dataUrl);
  }

  const constraints = {
    audio: false,
    video: true,
  };

  function cameraModalContent() {
    return (
      <>
        <Form
          title="Captura de imagem"
          fields={[]}
          buttons={[]}
          finalContent={
            <div>
              {videoRef && (
                <>
                  <StyledVideo
                    ref={videoRef}
                    style={{ transform: "scaleX(-1)" }}
                  />
                  <StyledSendImageButton onClick={captureImage}>
                    CAPTURAR IMAGEM
                  </StyledSendImageButton>
                  {image && (
                    <>
                      <StyledImage src={image} alt="Captured Image" />
                      <StyledSendImageButton
                        onClick={() => {
                          closeCameraModal(false);
                        }}
                      >
                        CONFIRMAR
                      </StyledSendImageButton>
                    </>
                  )}
                </>
              )}
            </div>
          }
        />
      </>
    );
  }

  function imageFileInputModalContent() {
    return (
      <>
        <Form
          title="Arquivo de imagem"
          fields={[
            {
              label: "Foto",
              inputType: "file",
              placeholder: "",
              onChangeCallback: onImageChange,
            },
          ]}
          buttons={[
            {
              label: "CONFIRMAR",
              onClickCallback: () => setShowImageInputModal(false),
              color: "white",
              backGroundColor: "MidnightBlue",
            },
          ]}
        />
      </>
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
            inputType: "text",
            placeholder: "Digite o seu CPF",
            onChangeCallback: onCpfChange,
          },
          {
            label: "Senha",
            inputType: "password",
            placeholder: "Digite a sua senha",
            onChangeCallback: onPasswordChange,
          },
        ]}
        buttons={[
          {
            label: "CADASTRAR FOTO",
            onClickCallback: openCameraModal,
            color: "white",
            backGroundColor: "green",
          },
          {
            label: "CONFIRMAR",
            onClickCallback: handleRegistration,
            color: "white",
            backGroundColor: "MidnightBlue",
          },
        ]}
        finalContent={
          <>
            <div>
              <h4>Não consegue cadastrar sua foto?</h4>
              <ButtonRegister onClick={openImageInputModal}>
                Enviar arquivo de foto
              </ButtonRegister>
            </div>
            <div>
              <h4>Já possui login?</h4>
              <ButtonRegister onClick={() => navigate("/")}>
                Faça login
              </ButtonRegister>
            </div>
          </>
        }
      />
      <Modal
        content={cameraModalContent()}
        show={showCameraModal}
        setShowCallback={closeCameraModal}
      />
      <Modal
        content={imageFileInputModalContent()}
        show={showImageInputModal}
        setShowCallback={setShowImageInputModal}
      />
      <LoadingSpinner loading={loading} />
    </>
  );
}
