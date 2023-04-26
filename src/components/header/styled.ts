import styled from "styled-components";

export const HeaderBody = styled.div`
  display: flex; 
  flex-wrap:wrap;
  justify-content: space-between;
  background-color: #35d592;
  width: 100%;
  padding 5px;
  position: fixed;
  top: 0;
`;

export const HeaderMain = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderTitle = styled.div`
  margin: auto 5px auto 10px;
  font-weight: bold;
  color: white;
  font-size: 30px;
`;

export const HeaderLogo = styled.img`
  height: 80px;
  padding: 5px;
`;

export const HeaderMargin = styled.img`
  height: 85px;
`;
