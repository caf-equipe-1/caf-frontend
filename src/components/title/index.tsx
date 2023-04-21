import { FlexBody } from "../flexBody";
import { HomeNavigateButton } from "../homeNavigateButton";
import { StyledTitle } from "./styles";

type Props = {
  title: string;
  homePageButton?: boolean;
};

export function Title({ title, homePageButton = true }: Props) {
  return (
    <FlexBody
      components={[
        <> {homePageButton ? <HomeNavigateButton /> : <></>} </>,
        <StyledTitle>{title}</StyledTitle>,
      ]}
    />
  );
}
