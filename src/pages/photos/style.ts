import styled from "styled-components";

export const PhotoDiv = styled.div`
  margin: 50px auto;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  display: grid;
  justify-items: center;
  text-align: center;
`;

export const PhotoButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: #414bb2;
  color: white;
  border-radius: 7px;
  &: hover {
    cursor: pointer;
  }
`;
export const PhotoImg = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 260px;
  border: 1px solid black;
`;
