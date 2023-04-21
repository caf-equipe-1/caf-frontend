import { StyledButton, StyledButtonIcon } from "./styles";
import homeButtonIcon from "../../Img/components/home-button.png";
import { useNavigate } from "react-router-dom";

export function HomeNavigateButton() {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate("/services")}>
      <StyledButtonIcon src={homeButtonIcon} />
    </StyledButton>
  );
}
