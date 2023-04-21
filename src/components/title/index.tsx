import { FlexBody } from "../flexBody";
import { HomeNavigateButton } from "../homeNavigateButton";
import { StyledTitle } from "./styles";

type Props = {
  title: string;
  homePageButton?: boolean;
};

export function Title({ title, homePageButton = true }: Props) {
  const homeElement = homePageButton ? (
    <HomeNavigateButton key={0} />
  ) : (
    <div key={0} />
  );

  return (
    <FlexBody
      components={[homeElement, <StyledTitle key={1}>{title}</StyledTitle>]}
    />
  );
}
