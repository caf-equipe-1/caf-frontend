import styled from "styled-components";

export const StyledButton = styled.button`
  height: 50px;
  width: 50px;
  margin: auto 5px 0 5px;
  background-color: lightblue;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    scale: 1.1;
    background-color: red;
  }
`;

export const StyledButtonIcon = styled.img`
  height: 30px;
  width: 30px;
`;
