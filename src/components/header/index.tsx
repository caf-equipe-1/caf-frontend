import { HeaderBody, HeaderTitle, HeaderLogo, HeaderMargin } from "./styled";
import logo from "../../Img/logo.png";

export function Header() {
  return (
    <>
      <HeaderBody>
        <HeaderLogo src={logo} />
        <HeaderTitle>SnapGuard</HeaderTitle>
      </HeaderBody>
      <HeaderMargin />
    </>
  );
}
