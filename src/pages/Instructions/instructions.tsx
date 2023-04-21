import { InstructionsDiv } from "./styles";

export function Instructions() {
  return (
    <>
      <InstructionsDiv>
        <h2>Agora é hora da selfie!!</h2>
        <h3>Siga as orientações abaixo:</h3>
        <ol>
          <li>
            Encontre um lugar bem iluminado: escolha um ambiente com boa
            iluminação natural ou artificial para garantir que sua foto fique
            clara e nítida.
          </li>
          <li>
            Enquadre seu rosto: posicione o rosto no centro do quadro da câmera
            e mantenha-o em uma posição frontal, com a cabeça reta e os olhos
            abertos.
          </li>
          <li>
            Retire óculos e chapéus: se você usa óculos ou chapéu, retire-os
            antes de tirar a foto para garantir que seu rosto esteja totalmente
            visível.
          </li>
          <li>
            Evite sombras no rosto: evite que haja sombras no rosto que possam
            interferir na qualidade da foto. Certifique-se de que sua face
            esteja bem iluminada.
          </li>
        </ol>
      </InstructionsDiv>
    </>
  );
}
