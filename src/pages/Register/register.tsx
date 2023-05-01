import { useNavigate } from "react-router";
import { ButtonRegister } from "./styles";
import { makeUserRouterFactory } from "../../infra/api/factories/user/user-router-factory";
import { useEffect, useRef, useState } from "react";
import { CreateUserDto } from "../../domain/dtos/user/createUser-dto";
import { Form } from "../../components/Form";
import { Modal } from "../../components/modal";

export function Register() {
  const navigate = useNavigate();
  const videoRef: any = useRef(null);
  const [showCameraModal, setShowCameraModal] = useState<boolean>(false);
  const [cameraStream, setCameraStream] = useState<any>();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState<any>({
    fields: [],
    buttons: [],
    finalContent: [],
  });
  const [userInfo, setUserInfo] = useState<CreateUserDto>({
    name: "",
    email: "",
    cpf: "",
    password: "",
    photo: "",
  });

  const imageCaptureOptionFormFields = {
    fields: [
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
    ],
    buttons: [
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
    ],
    finalContent: (
      <>
        <div>
          <h4>Não consegue cadastrar sua foto?</h4>
          <ButtonRegister
            onClick={() => {
              setFormData(imageFileInputOptionFormFields);
            }}
          >
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
    ),
  };

  const imageFileInputOptionFormFields = {
    fields: [
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
      {
        label: "Foto",
        inputType: "file",
        placeholder: "",
        onChangeCallback: onImageChange,
      },
    ],
    buttons: [
      {
        label: "CONFIRMAR",
        onClickCallback: handleRegistration,
        color: "white",
        backGroundColor: "MidnightBlue",
      },
    ],
    finalContent: (
      <>
        <div>
          <h4>Não consegue enviar o arquivo?</h4>
          <ButtonRegister
            onClick={() => {
              setFormData(imageCaptureOptionFormFields);
            }}
          >
            Capture sua foto
          </ButtonRegister>
        </div>
        <div>
          <h4>Já possui login?</h4>
          <ButtonRegister onClick={() => navigate("/")}>
            Faça login
          </ButtonRegister>
        </div>
      </>
    ),
  };

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
    setUserInfo({ ...userInfo, photo: dataUrl });
  }

  const constraints = {
    audio: false,
    video: true,
  };

  function cameraModalContent() {
    return (
      <>
        <Form
          title="Imagem"
          fields={[]}
          buttons={[]}
          finalContent={
            <div>
              <video ref={videoRef} style={{ transform: "scaleX(-1)" }} />
              <button onClick={captureImage}>Capture Image</button>
              {image && <img src={image} alt="Captured Image" />}
            </div>
          }
        />
      </>
    );
  }

  useEffect(function () {
    setFormData(imageCaptureOptionFormFields);
  }, []);

  return (
    <>
      <Form
        title="REGISTRO"
        fields={formData.fields}
        buttons={formData.buttons}
        finalContent={formData.finalContent}
      />
      <Modal
        content={cameraModalContent()}
        show={showCameraModal}
        setShowCallback={closeCameraModal}
      />
    </>
  );
}
