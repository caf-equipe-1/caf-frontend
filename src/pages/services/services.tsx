import {
  StyledServicesBody,
  StyledServiceCard,
  StyledTitle,
  StyledServiceIcon,
  StyledServiceLabel,
  StyledServiceCardIconDiv,
} from "./styles";
import documentIcon from "../../Img/services/document.png";
import creditCardIcon from "../../Img/services/credit-card.png";
import passwordIcon from "../../Img/services/password.png";

export function Services() {
  const services = [
    {
      icon: documentIcon,
      label: "DOCUMENTOS",
    },
    {
      icon: creditCardIcon,
      label: "CARTÕES",
    },
    {
      icon: passwordIcon,
      label: "SENHAS",
    },
  ];

  function renderServiceMenu() {
    return services.map(function (service, index) {
      return (
        <StyledServiceCard key={index}>
          <StyledServiceCardIconDiv>
            <StyledServiceIcon src={service.icon} />
          </StyledServiceCardIconDiv>
          <StyledServiceLabel>{service.label}</StyledServiceLabel>
        </StyledServiceCard>
      );
    });
  }

  return (
    <>
      <StyledTitle>Serviços:</StyledTitle>
      <StyledServicesBody>{renderServiceMenu()}</StyledServicesBody>
    </>
  );
}
