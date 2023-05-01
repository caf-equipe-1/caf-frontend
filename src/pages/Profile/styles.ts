import styled from "styled-components";

export const StyledVideo = styled.video`
  max-width: 85vw;
  margin: auto;
`;

export const StyledImage = styled.img`
  max-width: 85vw;
  margin: auto;
`;

export const StyledSendImageButton = styled.button`
  color: white;
  background-color: green;
  margin: 10px auto 10px auto;
  display: flex;
  padding: 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  :hover {
    scale: 1.2;
  }
`;
