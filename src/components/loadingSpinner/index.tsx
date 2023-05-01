import { StyledModalFather, StyledModal, StyledModalBody } from "./styles";
import "./styles.css";

type Props = {
  loading: boolean;
};

export function LoadingSpinner({ loading }: Props) {
  return loading ? (
    <>
      <StyledModalFather />
      <StyledModal>
        <StyledModalBody>
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </StyledModalBody>
      </StyledModal>
    </>
  ) : (
    <></>
  );
}
