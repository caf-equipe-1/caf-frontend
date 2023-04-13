import styled from "styled-components";

export const DrawerPage = styled.div`
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 600px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export const BoxRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 450px;
`;
