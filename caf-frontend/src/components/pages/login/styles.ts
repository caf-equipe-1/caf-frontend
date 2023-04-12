import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  border: 2px solid;
  border-radius: 10px;
`;

export const InputLogin = styled.input`
  padding: 8px;
  width: 90%;
  /* margin: 10px;
  border-radius: 5px; */
  border: none;
  border-bottom: 1px solid;
  font-size: 1.3rem;
`;

export const ButtonLogin = styled.button`
  display: flex;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;
