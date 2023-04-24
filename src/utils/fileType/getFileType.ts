export function getFileType(stringConvertedFile: string): string | null {
  const fileTypes = [
    {
      stringMatch: "text/plain",
      fileType: "txt",
    },
    {
      stringMatch: "image/jpeg",
      fileType: "jpeg",
    },
    {
      stringMatch: "image/png",
      fileType: "png",
    },
    {
      stringMatch: "application/pdf",
      fileType: "pdf",
    },
    {
      stringMatch:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      fileType: "docx",
    },
    {
      stringMatch: "application/vnd.ms-word.document.macroEnabled.12",
      fileType: "docm",
    },
    {
      stringMatch:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      fileType: "xlsx",
    },
    {
      stringMatch: "application/vnd.ms-excel.sheet.macroEnabled.12",
      fileType: "xlsm",
    },
    {
      stringMatch:
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      fileType: "pptx",
    },
    {
      stringMatch: "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
      fileType: "pptm",
    },
  ];

  for (const type of fileTypes) {
    const matchType = stringConvertedFile.includes(type.stringMatch);

    if (matchType) {
      return type.fileType;
    }
  }

  return null;
}
