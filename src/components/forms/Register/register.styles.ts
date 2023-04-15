import styled from "styled-components";

export const General = styled.div`
  margin-top: 10px;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px gray;
  display: grid;
  grid-template-collumns: auto;
  justify-content: center;
  align-content: center;
`;

export const RegisterFormLabel = styled.label`
  margin-bottom: 10px;
  margin-right: 3px;
  background: #e6e6e6;
  border-radius: 10px 0px 0px 10px;
  text-align: center;
  padding: 10px;
  font-weight: lighter;
  font-size: 15px;
`;

export const RegisterFormInput = styled.input`
  margin-bottom: 10px;
  border-radius: 0px 10px 10px 0px;
  border: none;
  background: #e6e6e6;
  ::placeholder {
    font-size: 15px;
    margin-left: 5px;
  }
  padding: 10px 0px;
  padding-left: 10px;
  width: 200px;
`;

export const RegisterFormButton = styled.button`
  padding: 8px 0px;
  width: 265px;
  border-radius: 5px;
  border: none;
  background-color: #35d592;
  &:hover {
    cursor: pointer;
  }
  margin-left: -31px;
`;

export const RegisterForm = styled.div`
  width: 200px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-content: center;
`;

export const RegisterFormImg = styled.img`
  width: 150px;
  left: 0px;
`;

export const RegisterFormLabelCPF = styled.label`
  margin-bottom: 10px;
  margin-right: 3px;
  background: #e6e6e6;
  border-radius: 10px 0px 0px 10px;
  text-align: center;
  padding: 10px;
  text-align: center;
  padding-left: 22px;
  font-size: 15px;
`;
