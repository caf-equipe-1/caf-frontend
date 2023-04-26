import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  height: 70px;
  width: 70px;
  margin: auto 5px auto 5px;
  background-color: lightgreen;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    scale: 1.1;
    background-color: lightblue;
  }
  box-shadow: 2px 2px 4px gray;
`;

export const StyledButtonIcon = styled.img`
  border-radius: 50%;
  height: 66px;
  width: 66px;
  margin: auto 0 auto 0;
`;
