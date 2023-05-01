import styled from "styled-components";

export const StyledModalFather = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: black;
  opacity: 0.6;
`;

export const StyledModal = styled.div`
  opacity: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  min-width: 270px;
  max-height: 90%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

export const StyledModalBody = styled.div`
  display: flex;
  justify-content: center;
`;
