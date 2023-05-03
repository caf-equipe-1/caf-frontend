import { useRef, useState } from "react";
import { Form } from "../../components/Form";
import { ActionsTitle } from "../../components/actionsTitle";
import { Title } from "../../components/title";
import { UpdateUserDto } from "../../domain/dtos/user/updateUser-dto";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../store/store";
import { makeUserRouterFactory } from "../../infra/api/factories/user/user-router-factory";
import { editUser } from "../../store/slices/user-slice";
import { Modal } from "../../components/modal";
import { StyledImage, StyledSendImageButton, StyledVideo } from "./styles";
import { PhotoInstructions } from "../../components/photoInstructions/photoInstructions";

export function Profile() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: RootState) => state.user.value);
  const videoRef: any = useRef(null);
  const [showCameraModal, setShowCameraModal] = useState<boolean>(false);
  const [cameraStream, setCameraStream] = useState<any>();
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState<UpdateUserDto>({
    name: loggedUser.name,
    email: loggedUser.email,
    password: "",
    cpf: loggedUser.cpf,
    photo: loggedUser.photo,
  });

  function onNameChange(inputName: string) {
    setUserInfo({ ...userInfo, name: inputName });
  }

  function onEmailChange(inputEmail: string) {
    setUserInfo({ ...userInfo, email: inputEmail });
  }

  function onPasswordChange(inputPassword: string) {
    setUserInfo({ ...userInfo, password: inputPassword });
  }

  function onCpfChange(inputCpf: string) {
    setUserInfo({ ...userInfo, cpf: inputCpf });
  }

  function onPhotoChange(inputPhoto: string) {
    setUserInfo({ ...userInfo, photo: inputPhoto });
  }

  function handleEdition() {
    const userRouter = makeUserRouterFactory();
    const updatedUser = userInfo;

    if (updatedUser.name?.trim() === "") {
      delete updatedUser.name;
    }

    if (updatedUser.email?.trim() === "") {
      delete updatedUser.email;
    }

    if (updatedUser.password?.trim() === "") {
      delete updatedUser.password;
    }

    if (updatedUser.cpf?.trim() === "") {
      delete updatedUser.cpf;
    }

    if (updatedUser.photo?.trim() === "") {
      delete updatedUser.photo;
    }

    userRouter.update(loggedUser.id, updatedUser).then(function (data) {
      if (data.error) {
        alert(data.message);
      } else {
        dispatch(editUser(userInfo));
      }
    });
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
    onPhotoChange(dataUrl);
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

  const constraints = {
    audio: false,
    video: true,
  };

  return (
    <>
      <Title title="Perfil" />
      <ActionsTitle />
      <Form
        title="Editar"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            placeholder: "Novo nome",
            onChangeCallback: onNameChange,
            defaultValue: userInfo.name,
          },
          {
            label: "Email",
            inputType: "email",
            placeholder: "Novo email",
            onChangeCallback: onEmailChange,
            defaultValue: userInfo.email,
          },
          {
            label: "Senha",
            inputType: "password",
            placeholder: "Nova senha",
            onChangeCallback: onPasswordChange,
          },
          {
            label: "CPF",
            inputType: "text",
            placeholder: "Novo CPF",
            onChangeCallback: onCpfChange,
            defaultValue: userInfo.cpf,
          },
          {
            label: "Foto",
            inputType: "file",
            placeholder: "",
            onChangeCallback: onPhotoChange,
          },
        ]}
        buttons={[
          {
            label: "CAPTURAR NOVA FOTO",
            onClickCallback: openCameraModal,
            color: "white",
            backGroundColor: "green",
          },
          {
            label: "Enviar",
            onClickCallback: handleEdition,
            color: "white",
            backGroundColor: "MidnightBlue",
          },
        ]}
      />
      <Modal
        content={cameraModalContent()}
        show={showCameraModal}
        setShowCallback={closeCameraModal}
      />
    </>
  );
}
