import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  background-color: white;
  border: solid 2px #35d592;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  overflow-y: scroll;
  box-shadow: 0px 0px 0px 2px gray;
  z-index: 9999;
`;

export const StyledModalBody = styled.div`
  background-color: gray;
`;

export const StyledCloseButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #35d592;
  padding: 5px;
`;

export const StyledCloseButton = styled.div`
  height: 50px;
  width: 50px;
  margin: auto 5px 0 5px;
  background-color: red;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    scale: 1.1;
    background-color: orange;
  }
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: center;
`;

export const StyledCloseButtonIcon = styled.img`
  height: 30px;
  width: 30px;
  margin: auto;
`;