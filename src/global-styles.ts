import { createGlobalStyle, css } from "styled-components";

const RobotoSlab = css`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100;200;300;400;500;700;800;900&display=swap");
`;
export const GlobalStyle = createGlobalStyle`
${RobotoSlab}
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
    html, #root, body {
    font: 1rem Roboto, sans-serif;
    align-items: center;
    justify-content:center;
}`;
