import { InstructionsDiv, Instructionli } from "./styles";

export function PhotoInstructions() {
  return (
    <InstructionsDiv>
      <ol>
        <Instructionli>
          Encontre um lugar bem iluminado: escolha um ambiente com boa
          iluminação natural ou artificial para garantir que sua foto fique
          clara e nítida.
        </Instructionli>
        <Instructionli>
          Enquadre seu rosto: posicione o rosto no centro do quadro da câmera e
          mantenha-o em uma posição frontal, com a cabeça reta e os olhos
          abertos.
        </Instructionli>
        <Instructionli>
          Retire óculos e chapéus: se você usa óculos ou chapéu, retire-os antes
          de tirar a foto para garantir que seu rosto esteja totalmente visível.
        </Instructionli>
      </ol>
    </InstructionsDiv>
  );
}
