import {
  StyledButton,
  StyledButtonIcon,
  StyledDiv,
  StyledLogoutButton,
  StyledLogoutButtonIcon,
} from "./styles";
import profileIcon from "../../Img/components/profile-icon.png";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import LogoutIcon from "../../Img/components/logout-button.png";

export function ProfileNavigateButton() {
  const userImage = useSelector((state: RootState) => state.user.value).photo;
  const navigate = useNavigate();

  function renderIcon() {
    return userImage.trim() === "" ? profileIcon : userImage;
  }

  function makeLogout() {
    if (window.confirm("Gostaria de fazer o logout?")) {
      window.location.reload();
    }
  }

  return (
    <StyledDiv>
      <StyledButton onClick={() => navigate("/profile")}>
        <StyledButtonIcon src={renderIcon()} />
      </StyledButton>
      <StyledLogoutButton onClick={makeLogout}>
        <StyledLogoutButtonIcon src={LogoutIcon} />
      </StyledLogoutButton>
    </StyledDiv>
  );
}
