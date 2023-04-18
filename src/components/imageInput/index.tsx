import { FileInput } from "./styles";

interface Props {
  onChange: (convertedImage: any) => void;
}

export function ImageInput({ onChange }: Props) {
  function handleFileInputChange(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = function (event: any) {
      onChange(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  return <FileInput type="file" onChange={handleFileInputChange} />;
}
