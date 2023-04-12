import styled from "styled-components";

export const StyledLoginPage = styled.div`
  background-color: #00002e;
  color: #c9c5c9;
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
  width: 350px;
  height: 500px;
  border: 2px solid;
  border-radius: 10px;
`;

export const InputLogin = styled.input`
  padding: 8px;
  width: 90%;
  margin: 10px;
  /* border-radius: 5px; */
  border: none;
  border-bottom: 1px solid #aeaaae;
  font-size: 1.1rem;
  background-color: transparent;
  color: #c9c5c9;
`;

export const ButtonLogin = styled.button`
  display: flex;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: #321ab8;
  color: #c9c5c9;
  transition: all 0.2s;
  
  :hover {
    scale: 1.2;
  }
`;
