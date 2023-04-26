import { StyledButton, StyledButtonIcon } from "./styles";
import profileIcon from "../../Img/components/profile-icon.png";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export function ProfileNavigateButton() {
  const userImage = useSelector((state: RootState) => state.user.value).photo;
  const navigate = useNavigate();

  function renderIcon() {
    return userImage.trim() === "" ? profileIcon : userImage;
  }

  return (
    <StyledButton onClick={() => navigate("/profile")}>
      <StyledButtonIcon src={renderIcon()} />
    </StyledButton>
  );
}
