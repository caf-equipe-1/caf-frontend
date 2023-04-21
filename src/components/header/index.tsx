import { HeaderBody, HeaderTitle, HeaderLogo, HeaderMargin } from "./styled";
import logo from "../../Img/CAFImg.jpg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBody onClick={() => navigate("/services")}>
        <HeaderLogo src={logo} />
        <HeaderTitle>Header</HeaderTitle>
      </HeaderBody>
      <HeaderMargin />
    </>
  );
}
