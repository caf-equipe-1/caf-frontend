import {
  HeaderBody,
  HeaderMain,
  HeaderTitle,
  HeaderLogo,
  HeaderMargin,
} from "./styled";
import logo from "../../Img/logo.png";
import { ProfileNavigateButton } from "../profileNavigateButton";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { LoginValidator } from "../loginValidator/loginValidator";

export function Header() {
  const loggedUser = useSelector((state: RootState) => state.user.value);

  return (
    <>
      <HeaderBody>
        <LoginValidator />
        <HeaderMain>
          <HeaderLogo src={logo} />
          <HeaderTitle>SnapGuard</HeaderTitle>
        </HeaderMain>
        {loggedUser.id.trim() === "" ? <></> : <ProfileNavigateButton />}
      </HeaderBody>
      <HeaderMargin />
    </>
  );
}
