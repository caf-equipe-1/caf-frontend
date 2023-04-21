import {
  StyledCardBody,
  StyledCardTitle,
  StyledContentBody,
  StyledContentLabel,
  StyledContentText,
  StyledButtonIcon,
  StyledCopyButton,
  StyledActionButtonsBody,
  StyledEditButton,
  StyledDeleteButton,
  StyledDownloadButton,
} from "./styles";
import { FlexBody } from "../flexBody";
import copyButtonIcon from "../../Img/components/copy-button.png";
import deleteButtonIcon from "../../Img/components/delete-button.png";
import editButtonIcon from "../../Img/components/edit-button.png";
import downloadButtonIcon from "../../Img/components/download-button.png";

type Props = {
  title: string;
  entityId: string;
  content: {
    label: string;
    text: string;
  }[];
  downloadButton?: boolean;
  editCallback: (entityId: string) => void;
  deleteCallback: (entityId: string) => void;
  downloadCallback?: (entityId: string) => void;
};

export function Card({
  title,
  content,
  entityId,
  downloadButton,
  deleteCallback,
  editCallback,
  downloadCallback,
}: Props) {
  function renderContent() {
    return content.map(function (item, index) {
      return (
        <StyledContentBody key={index}>
          <StyledContentLabel>{item.label}:</StyledContentLabel>
          <StyledContentText>{item.text}</StyledContentText>
          <StyledCopyButton
            onClick={() => {
              navigator.clipboard.writeText(item.text).then(() => {
                alert("Copiado para a área de transferência!");
              });
            }}
          >
            <StyledButtonIcon src={copyButtonIcon} />
          </StyledCopyButton>
        </StyledContentBody>
      );
    });
  }

  function renderDownloadButton() {
    return downloadButton && downloadCallback ? (
      <StyledDownloadButton onClick={() => downloadCallback(entityId)}>
        <StyledButtonIcon src={downloadButtonIcon} />
      </StyledDownloadButton>
    ) : (
      <></>
    );
  }

  function renderActionButtons() {
    return (
      <FlexBody
        components={[
          <StyledActionButtonsBody key={0}>
            {renderDownloadButton()}
            <StyledEditButton onClick={() => editCallback(entityId)}>
              <StyledButtonIcon src={editButtonIcon} />
            </StyledEditButton>
            <StyledDeleteButton onClick={() => deleteCallback(entityId)}>
              <StyledButtonIcon src={deleteButtonIcon} />
            </StyledDeleteButton>
          </StyledActionButtonsBody>,
        ]}
      />
    );
  }

  return (
    <StyledCardBody>
      <StyledCardTitle>{title}</StyledCardTitle>
      {renderContent()}
      {renderActionButtons()}
    </StyledCardBody>
  );
}
