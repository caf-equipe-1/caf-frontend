import { PhotoDiv, PhotoButton, PhotoImg } from "./style";
import Perfil from "../../Img/perfil.jpg";

export function Photos() {
  return (
    <>
      <PhotoDiv>
        <h2>Agora é hora da selfie! </h2>
        <h3>Posicione seu rosto dentro do quadro, sorria e tire a foto.</h3>
        <PhotoImg src={Perfil} alt="" />
        <PhotoButton>Enviar</PhotoButton>
      </PhotoDiv>
    </>
  );
}
