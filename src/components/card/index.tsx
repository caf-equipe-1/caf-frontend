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
  StyledHideButton,
} from "./styles";
import { FlexBody } from "../flexBody";
import copyButtonIcon from "../../Img/components/copy-button.png";
import deleteButtonIcon from "../../Img/components/delete-button.png";
import editButtonIcon from "../../Img/components/edit-button.png";
import downloadButtonIcon from "../../Img/components/download-button.png";
import closedEye from "../../Img/components/closedEye-button.png";
import openedEye from "../../Img/components/openedEye-button.png";
import { useState } from "react";

type Props = {
  title: string;
  entityId: string;
  content: {
    label: string;
    text: string;
    hide?: boolean;
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
  const [cardContent, setCardContent] = useState(
    content.map(function (item) {
      return {
        ...item,
        hide: item.hide ? item.hide : false,
        hidden: item.hide ? item.hide : false,
      };
    })
  );

  function toggleHideContent(contentIndex: number) {
    setCardContent([
      ...cardContent.map(function (item, index) {
        const newItem = item;
        console.log(item);
        if (Number(contentIndex) === Number(index)) {
          if (newItem.hide) {
            newItem.hidden = !item.hidden;
          }
        }
        return newItem;
      }),
    ]);
  }

  function hiddenContentMask(text: string, hidden: boolean) {
    return hidden ? text.replace(/./g, "*") : text;
  }

  function renderContent() {
    return cardContent.map(function (item, index) {
      return (
        <StyledContentBody key={index}>
          <StyledContentLabel>{item.label}:</StyledContentLabel>
          <StyledContentText>
            {hiddenContentMask(item.text, item.hidden)}
          </StyledContentText>
          <FlexBody
            components={[
              <StyledCopyButton
                onClick={() => {
                  navigator.clipboard.writeText(item.text).then(() => {
                    alert("Copiado para a área de transferência!");
                  });
                }}
              >
                <StyledButtonIcon src={copyButtonIcon} />
              </StyledCopyButton>,
              <>
                {item.hide ? (
                  <StyledHideButton onClick={() => toggleHideContent(index)}>
                    <StyledButtonIcon
                      src={item.hidden ? closedEye : openedEye}
                    />
                  </StyledHideButton>
                ) : (
                  <></>
                )}
              </>,
            ]}
          />
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
