import styled from "styled-components";

export const StyledServiceCard = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  flex-direction: column;
  margin: 30px;
`;

export const StyledServiceCardIconDiv = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  border: solid 2px #35d592;
  padding: 20px;
  height: 150px;
  width: 150px;
  margin: auto;
  cursor: pointer;
  :hover {
    scale: 1.2;
    background-color: lightgreen;
  }
  box-shadow: 7px 5px 7px gray;
`;

export const StyledServiceIcon = styled.img`
  height: 100px;
  width: 100px;
  margin: auto 0 auto 0;
`;

export const StyledServiceLabel = styled.div`
  color: #35d592;
  font-weight: bold;
  margin: 10px auto auto auto;
  font-size: 20px;
`;
