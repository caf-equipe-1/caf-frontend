import { FileInput } from "../FileInput";
import { StyledButton, StyledInput, StyledBox, StyledPage } from "./styles";

type Props = {
  title: string;
  fields: {
    label: string;
    fieldName: string;
    inputType: string;
    placeholder: string;
    onChangeCallback: (value: any) => void;
  }[];
  buttons: {
    label: string;
    color: string;
    onClickCallback: () => void;
  }[];
  finalContent?: JSX.Element;
};

export function Form({ title, fields, buttons, finalContent }: Props) {
  function renderFields() {
    return fields.map(function (field, index) {
      switch (field.inputType) {
        case "file":
          return (
            <div>
              <h3>{field.label}</h3>
              <FileInput onChange={field.onChangeCallback} />
            </div>
          );

        default:
          <div key={index}>
            <h3>{field.label}</h3>
            <StyledInput
              onChange={(event) => field.onChangeCallback(event.target.value)}
              type={field.inputType}
              placeholder={field.placeholder}
            />
          </div>;
      }
    });
  }

  function renderButtons() {
    return buttons.map(function (button, index) {
      return (
        <StyledButton
          style={{ backgroundColor: button.color }}
          onClick={() => button.onClickCallback()}
        >
          {button.label}
        </StyledButton>
      );
    });
  }

  function renderFinalContent() {
    return finalContent ? finalContent : <></>;
  }

  return (
    <>
      <StyledPage>
        <StyledBox>
          <h2>{title}</h2>
          <div>
            {renderFields()}
            {renderButtons()}
            {renderFinalContent()}
          </div>
        </StyledBox>
      </StyledPage>
    </>
  );
}
