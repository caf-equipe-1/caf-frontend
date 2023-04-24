import { FileInput } from "../FileInput";
import { StyledButton, StyledInput, StyledBox, StyledPage } from "./styles";

type Props = {
  title: string;
  fields: {
    label: string;
    inputType: string;
    placeholder: string;
    defaultValue?: string;
    onChangeCallback: (value: any) => void;
  }[];
  buttons: {
    label: string;
    color: string;
    backGroundColor: string;
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
            <div key={index}>
              <h3>{field.label}</h3>
              <FileInput onChange={field.onChangeCallback} />
            </div>
          );

        default:
          return field.defaultValue ? (
            <div key={index}>
              <h3>{field.label}</h3>
              <StyledInput
                value={field.defaultValue ?? ""}
                onChange={(event) => field.onChangeCallback(event.target.value)}
                type={field.inputType}
                placeholder={field.placeholder}
              />
            </div>
          ) : (
            <div key={index}>
              <h3>{field.label}</h3>
              <StyledInput
                onChange={(event) => field.onChangeCallback(event.target.value)}
                type={field.inputType}
                placeholder={field.placeholder}
              />
            </div>
          );
      }
    });
  }

  function renderButtons() {
    return buttons.map(function (button, index) {
      return (
        <StyledButton
          key={index}
          style={{
            backgroundColor: button.backGroundColor,
            color: button.color,
          }}
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
