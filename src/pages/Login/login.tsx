import { useNavigate } from "react-router";
import {
  ButtonRegister,
  StyledImage,
  StyledSendImageButton,
  StyledVideo,
} from "./styles";
import { useRef, useState } from "react";
import { EmailLoginDto } from "../../domain/dtos/login/emailLogin-dto";
import { makeEmailLoginRouterFactory } from "../../infra/api/factories/login/emailLogin-router-factory";
import { Form } from "../../components/Form";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/user-slice";
import { addManyPasswordsStore } from "../../store/slices/password-slice";
import { addManyCardsStore } from "../../store/slices/card-slice";
import { addManyDocumentsStore } from "../../store/slices/document-slice";
import { SelfieLoginDto } from "../../domain/dtos/login/selfieLogin-dto";
import { Modal } from "../../components/modal";
import { makeSelfieLoginRouterFactory } from "../../infra/api/factories/login/selfieLogin-router-factory";
import { LoadingSpinner } from "../../components/loadingSpinner";
import { PhotoInstructions } from "../../components/photoInstructions/photoInstructions";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const videoRef: any = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginBySelfie, setLoginBySelfie] = useState<boolean>(true);
  const [showCameraModal, setShowCameraModal] = useState<boolean>(false);
  const [cameraStream, setCameraStream] = useState<any>();
  const [image, setImage] = useState(null);
  const [emailLoginData, setEmailLoginData] = useState<EmailLoginDto>({
    email: "",
    password: "",
  });
  const [selfieLoginData, setSelfieLoginData] = useState<SelfieLoginDto>({
    cpf: "",
    selfie: "",
  });

  function validateEmailLoginFields() {
    if (emailLoginData.email.toString().trim() === "") {
      alert("Preencha o email");
      return false;
    }

    if (emailLoginData.password.toString().trim() === "") {
      alert("Preencha a senha");
      return false;
    }

    return true;
  }

  function validateSelfieLoginFields() {
    if (selfieLoginData.cpf.toString().trim() === "") {
      alert("Preencha o CPF");
      return false;
    }

    if (selfieLoginData.selfie.toString().trim() === "") {
      alert("Capture a foto");
      return false;
    }

    return true;
  }

  function handleEmailLogin() {
    if (!validateEmailLoginFields()) {
      return;
    }

    setLoading(true);
    const loginRouter = makeEmailLoginRouterFactory();

    loginRouter.login(emailLoginData).then(function (data) {
      if (data.error) {
        alert(data.message);
      } else {
        if (data.body) {
          dispatch(addUser(data.body.user));
          dispatch(addManyPasswordsStore(data.body.user.passwords));
          dispatch(addManyCardsStore(data.body.user.cards));
          dispatch(addManyDocumentsStore(data.body.user.documents));
        }
        alert("Login realizado com sucesso!");
        navigate("/services");
      }
      setLoading(false);
    });
  }

  function handleSelfieLogin() {
    if (!validateSelfieLoginFields()) {
      return;
    }

    setLoading(true);
    const loginRouter = makeSelfieLoginRouterFactory();

    loginRouter.login(selfieLoginData).then(function (data) {
      if (data.error) {
        alert(data.message);
      } else {
        if (data.body) {
          dispatch(addUser(data.body.user));
          dispatch(addManyPasswordsStore(data.body.user.passwords));
          dispatch(addManyCardsStore(data.body.user.cards));
          dispatch(addManyDocumentsStore(data.body.user.documents));
        }
        alert("Login realizado com sucesso!");
        navigate("/services");
      }
      setLoading(false);
    });
  }

  function onEmailChange(inputEmail: string) {
    setEmailLoginData({ ...emailLoginData, email: inputEmail });
  }

  function onPasswordChange(inputPassword: string) {
    setEmailLoginData({ ...emailLoginData, password: inputPassword });
  }

  function emailLoginForm() {
    return (
      <Form
        title="LOGIN POR EMAIL"
        fields={[
          {
            inputType: "text",
            label: "E-mail",
            placeholder: "Digite seu e-mail",
            onChangeCallback: onEmailChange,
            defaultValue: emailLoginData.email,
          },
          {
            inputType: "password",
            label: "Senha",
            placeholder: "Digite sua senha",
            onChangeCallback: onPasswordChange,
            defaultValue: emailLoginData.password,
          },
        ]}
        buttons={[
          {
            label: "CONFIRMAR",
            color: "white",
            backGroundColor: "MidnightBlue",
            onClickCallback: handleEmailLogin,
          },
        ]}
        finalContent={
          <>
            <div>
              <h4>Gostaria de logar por selfie?</h4>
              <ButtonRegister onClick={toggleLoginType}>
                Logar por selfie
              </ButtonRegister>
            </div>
            <div>
              <h4>Ainda não possui login?</h4>
              <ButtonRegister onClick={() => navigate("register")}>
                Registre-se
              </ButtonRegister>
            </div>
          </>
        }
      />
    );
  }

  function onCpfChange(inputCpf: string) {
    setSelfieLoginData({ ...selfieLoginData, cpf: inputCpf });
  }

  function onImageChange(convertedImage: string) {
    setSelfieLoginData({ ...selfieLoginData, selfie: convertedImage });
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

  function selfieLoginForm() {
    return (
      <Form
        title="LOGIN POR SELFIE"
        fields={[
          {
            label: "CPF",
            inputType: "text",
            placeholder: "Digite o seu CPF",
            onChangeCallback: onCpfChange,
            defaultValue: selfieLoginData.cpf,
          },
        ]}
        buttons={[
          {
            label: "CAPTURAR FOTO",
            onClickCallback: openCameraModal,
            color: "white",
            backGroundColor: "green",
          },
          {
            label: "CONFIRMAR",
            onClickCallback: handleSelfieLogin,
            color: "white",
            backGroundColor: "MidnightBlue",
          },
        ]}
        finalContent={
          <>
            <div>
              <h4>Não consegue capturar sua foto?</h4>
              <ButtonRegister onClick={toggleLoginType}>
                Logar por email
              </ButtonRegister>
            </div>
            <div>
              <h4>Ainda não possui login?</h4>
              <ButtonRegister onClick={() => navigate("register")}>
                Registre-se
              </ButtonRegister>
            </div>
          </>
        }
      />
    );
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

  function toggleLoginType() {
    setLoginBySelfie(!loginBySelfie);
  }

  function cameraModalContent() {
    return (
      <>
        <Form
          title="Captura de imagem"
          fields={[]}
          buttons={[]}
          finalContent={
            <div>
              <PhotoInstructions />
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

  return (
    <>
      {loginBySelfie ? selfieLoginForm() : emailLoginForm()}
      <Modal
        content={cameraModalContent()}
        show={showCameraModal}
        setShowCallback={closeCameraModal}
      />
      <LoadingSpinner loading={loading} />
    </>
  );
}
