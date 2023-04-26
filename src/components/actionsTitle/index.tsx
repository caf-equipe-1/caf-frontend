import { HomeNavigateButton } from "../homeNavigateButton";
import { ActionsBody, AddEntityButton, AddEntityButtonIcon } from "./styles";
import CreateButtonIcon from "../../Img/components/create-button.png";

type Props = {
  createEntityCallback?: () => void;
};

export function ActionsTitle({ createEntityCallback }: Props) {
  function renderCreateEntityButton() {
    return createEntityCallback ? (
      <AddEntityButton onClick={() => createEntityCallback()}>
        <AddEntityButtonIcon src={CreateButtonIcon} />
      </AddEntityButton>
    ) : (
      <></>
    );
  }

  return (
    <ActionsBody>
      <HomeNavigateButton />
      {renderCreateEntityButton()}
    </ActionsBody>
  );
}
