import {
  StyledServiceCard,
  StyledServiceIcon,
  StyledServiceLabel,
  StyledServiceCardIconDiv,
} from "./styles";
import documentIcon from "../../Img/services/document.png";
import creditCardIcon from "../../Img/services/credit-card.png";
import passwordIcon from "../../Img/services/password.png";
import { Title } from "../../components/title";
import { FlexBody } from "../../components/flexBody";
import { useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate();
  const services = [
    {
      icon: documentIcon,
      label: "DOCUMENTOS",
      route: "/documents",
    },
    {
      icon: creditCardIcon,
      label: "CARTÕES",
      route: "/cards",
    },
    {
      icon: passwordIcon,
      label: "SENHAS",
      route: "/passwords",
    },
  ];

  function renderServiceMenu() {
    return services.map(function (service, index) {
      return (
        <StyledServiceCard key={index}>
          <StyledServiceCardIconDiv onClick={() => navigate(service.route)}>
            <StyledServiceIcon src={service.icon} />
          </StyledServiceCardIconDiv>
          <StyledServiceLabel>{service.label}</StyledServiceLabel>
        </StyledServiceCard>
      );
    });
  }

  return (
    <>
      <Title title="Serviços:" />
      <FlexBody components={renderServiceMenu()} />
    </>
  );
}
