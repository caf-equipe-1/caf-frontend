import styled from "styled-components";

export const InstructionsDiv = styled.div`
  padding: 10px;
`;
export const InstructionH2 = styled.h2`
  text-align: center;
`;
export const InstructionH3 = styled.h3`
  margin-top: 10px;
`;

export const Instructionli = styled.li`
  margin-top: 10px;
  margin-left: 20px;
`;
export const InstructionButton = styled.button`
  margin-top: 20px;
  margin-left: 42%;
  width: 200px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-left: 30%;
  }
  color: white;
  background-color: #414bb2;
  border-radius: 7px;
`;
