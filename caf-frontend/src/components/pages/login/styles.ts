import styled from "styled-components";

export const StyledLoginPage = styled.div`
  /* background-color: #00002e;
  color: #c9c5c9; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  h2 {
    margin-bottom: 30px;
  }

  h3 {
    margin-top: 10px;
  }

  h4 {
    margin-top: 10px;
    text-align: center;
  }
`;

export const StyledLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.24);
`;

export const InputLogin = styled.input`
  padding: 8px;
  width: 100%;
  margin: 10px;
  border: none;
  border-bottom: 1px solid;
  font-size: 1.1rem;
  background-color: transparent;
`;

export const ButtonConfirm = styled.button`
  display: flex;
  margin: 10px auto;
  padding: 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: #000042;
  color: #c9c5c9;
  transition: all 0.2s;

  :hover {
    scale: 1.2;
  }
`;

export const ButtonRegister = styled.button`
display: flex;
  margin: 10px auto;
  padding: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: transparent;
`