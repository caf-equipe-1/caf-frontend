import { StyledFlexBody } from "./styles";

type Props = {
  components: JSX.Element[];
};

export function FlexBody({ components }: Props) {
  return <StyledFlexBody>{components}</StyledFlexBody>;
}
