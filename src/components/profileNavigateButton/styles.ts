import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  margin: auto 5px auto 5px;
  background-color: lightgreen;
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
  :hover {
    scale: 1.1;
    background-color: lightblue;
  }
  box-shadow: 2px 2px 4px gray;
`;

export const StyledButtonIcon = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
