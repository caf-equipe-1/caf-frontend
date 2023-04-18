import { HeaderBody, HeaderTitle, HeaderLogo, HeaderMargin } from "./styled";
import logo from "../../Img/CAFImg.jpg";

export function Header() {
  return (
    <>
      <HeaderBody>
        <HeaderLogo src={logo} />
        <HeaderTitle>Header</HeaderTitle>
      </HeaderBody>
      <HeaderMargin />
    </>
  );
}
