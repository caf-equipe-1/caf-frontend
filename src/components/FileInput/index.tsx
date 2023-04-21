import { StyledFileInput } from "./styles";

interface Props {
  onChange: (convertedImage: any) => void;
}

export function FileInput({ onChange }: Props) {
  function handleFileInputChange(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = function (event: any) {
      onChange(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  return <StyledFileInput type="file" onChange={handleFileInputChange} />;
}
