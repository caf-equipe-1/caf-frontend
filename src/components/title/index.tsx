import { StyledTitle } from "./styles";

type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <StyledTitle>{title}</StyledTitle>;
}
