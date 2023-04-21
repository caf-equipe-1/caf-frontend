import styled from "styled-components";

export const ActionsBody = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AddEntityButton = styled.button`
  height: 50px;
  width: 50px;
  margin: auto 5px 0 5px;
  background-color: LimeGreen;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    scale: 1.1;
    background-color: Chartreuse;
  }
  box-shadow: 2px 2px 4px gray;
`;

export const AddEntityButtonIcon = styled.img`
  height: 30px;
  width: 30px;
`;
