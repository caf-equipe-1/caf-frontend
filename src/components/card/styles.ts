import styled from "styled-components";

export const StyledCardBody = styled.div`
  margin: 15px;
  border: 2px solid green;
  background-color: #35d592;
  padding: 10px;
  color: white;
  border-radius: 5px;
  :hover {
    border-color: yellow;
  }
  box-shadow: 2px 2px 6px black;
`;

export const StyledCardTitle = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledContentBody = styled.div`
  background-color: gray;
  padding: 5px;
  border-radius: 5px;
  border: solid 2px black;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const StyledContentLabel = styled.p`
  font-weight: bold;
  text-align: center;
`;

export const StyledContentText = styled.p`
  margin: 5px 0 5px 0;
  text-align: center;
`;

export const StyledCopyButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: AntiqueWhite;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  margin: auto;
  :hover {
    scale: 1.03;
    background-color: lightblue;
  }
  box-shadow: 2px 2px 4px gray;
`;

export const StyledEditButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: CornflowerBlue;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  margin: auto;
  :hover {
    scale: 1.03;
    background-color: lightblue;
  }
  box-shadow: 2px 2px 4px gray;
`;

export const StyledDownloadButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: LimeGreen;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  margin: auto;
  :hover {
    scale: 1.03;
    background-color: Lime;
  }
  box-shadow: 2px 2px 4px gray;
`;

export const StyledDeleteButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: Crimson;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  margin: auto;
  :hover {
    scale: 1.03;
    background-color: lightblue;
  }
  box-shadow: 2px 2px 4px gray;
`;

export const StyledButtonIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: auto;
`;

export const StyledActionButtonsBody = styled.div`
  padding: 5px;
  margin: 8px 0 0 0;
  width: 150px;
  display: flex;
  flex-wrap: wrap;
`;
