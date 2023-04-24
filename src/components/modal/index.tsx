import {
  StyledModal,
  StyledModalBody,
  StyledCloseButton,
  StyledCloseButtonIcon,
  StyledCloseButtonDiv,
} from "./styles";
import closeButtonIcon from "../../Img/components/close-button.png";

type Props = {
  show: boolean;
  setShowCallback: (showProperty: boolean) => void;
  content: JSX.Element;
};

export function Modal({ show, setShowCallback, content }: Props) {
  function toggleModal() {
    setShowCallback(!show);
  }

  return show ? (
    <StyledModal>
      <StyledCloseButtonDiv>
        <StyledCloseButton onClick={() => toggleModal()}>
          <StyledCloseButtonIcon src={closeButtonIcon} />
        </StyledCloseButton>
      </StyledCloseButtonDiv>
      <StyledModalBody>{content}</StyledModalBody>
    </StyledModal>
  ) : (
    <></>
  );
}
