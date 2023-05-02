import { useEffect, useState } from "react";
import { FlexBody } from "../../components/flexBody";
import { Title } from "../../components/title";
import { HttpResponse } from "../../domain/types/http/httpResponse-dto";
import { makeDocumentRouterFactory } from "../../infra/api/factories/document/document-router-factory";
import { Document } from "../../domain/entities/document/document-entity";
import { Card } from "../../components/card";
import { ActionsTitle } from "../../components/actionsTitle";
import { CreateDocumentDto } from "../../domain/dtos/document/createDocument-dto";
import { UpdateDocumentDto } from "../../domain/dtos/document/updateDocument-dto";
import { Form } from "../../components/Form";
import { Modal } from "../../components/modal";
import { getFileType } from "../../utils/fileType/getFileType";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addDocumentStore,
  addManyDocumentsStore,
  deleteDocumentStore,
  updateDocumentStore,
} from "../../store/slices/document-slice";
import { StyledIframe } from "./styles";

export function Documents() {
  const dispatch = useDispatch();
  const storedDocuments = useSelector(
    (state: RootState) => state.documents.value
  );
  const documentRouter = makeDocumentRouterFactory();
  const [openCreationModal, setOpenCreationModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [createdDocument, setCreatedDocument] = useState<CreateDocumentDto>({
    name: "",
    document: "",
  });
  const [updatedDocument, setUpdatedDocument] = useState<UpdateDocumentDto>({
    name: "",
    document: "",
  });
  const [documentId, setDocumentId] = useState<string>("");
  const [documentViewLink, setDocumentViewLink] = useState<string>("");
  const [documentViewModal, setDocumentViewModal] = useState<boolean>(false);

  function validateCreationFields() {
    if (createdDocument.name.toString().trim() === "") {
      alert("Preencha o nome do documento");
      return false;
    }

    if (createdDocument.document.toString().trim() === "") {
      alert("Envie o arquivo");
      return false;
    }

    return true;
  }

  function getDocumentsFromApi() {
    documentRouter.getAll().then(function (response: HttpResponse<Document[]>) {
      if (response.body) {
        dispatch(addManyDocumentsStore(response.body));
      }
    });
  }

  function renderCards() {
    return storedDocuments.map(function (document, index) {
      return (
        <Card
          title={""}
          entityId={document.id}
          content={[{ label: "Nome", text: document.name }]}
          key={index}
          deleteCallback={deleteDocument}
          editCallback={openUpdateDocumentModal}
          downloadButton={true}
          downloadCallback={downloadDocument}
          viewCallback={viewDocument}
        />
      );
    });
  }

  function deleteDocument(documentId: string) {
    if (window.confirm("Deseja apagar esse documento?")) {
      dispatch(deleteDocumentStore(documentId));
      documentRouter.delete(documentId).then((response) => {
        if (response.error) {
          alert(response.message);
          getDocumentsFromApi();
        }
      });
    }
  }

  function openCreateDocumentModal() {
    setCreatedDocument({
      name: "",
      document: "",
    });

    setOpenCreationModal(true);
  }

  function createDocument() {
    if (!validateCreationFields()) {
      return;
    }

    if (!getFileType(createdDocument.document || "")) {
      alert("Tipo de arquivo inválido");

      return;
    }

    dispatch(addDocumentStore(createdDocument));
    setOpenCreationModal(false);

    documentRouter
      .create(createdDocument)
      .then(function (response) {
        if (response.error) {
          alert(response.message);
        }
      })
      .finally(function () {
        getDocumentsFromApi();
      });
  }

  function onNameChangeCreate(inputName: string) {
    setCreatedDocument({ ...createdDocument, name: inputName });
  }

  function onDocumentChangeCreate(inputDocument: string) {
    setCreatedDocument({ ...createdDocument, document: inputDocument });
  }

  function createDocumentForm() {
    return (
      <Form
        title="Adicionar Documento"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            placeholder: "Nome do documento",
            onChangeCallback: onNameChangeCreate,
          },
          {
            label: "Arquivo",
            inputType: "file",
            placeholder: "",
            onChangeCallback: onDocumentChangeCreate,
          },
        ]}
        buttons={[
          {
            label: "Enviar",
            onClickCallback: createDocument,
            color: "white",
            backGroundColor: "LimeGreen",
          },
        ]}
      />
    );
  }

  function openUpdateDocumentModal(documentId: string) {
    const foundDocument = storedDocuments.find(function (item) {
      return item.id.toString() === documentId;
    });

    if (foundDocument) {
      setUpdatedDocument(foundDocument);
      setDocumentId(documentId);
    }

    setOpenUpdateModal(true);
  }

  function updateDocument() {
    const updateData = updatedDocument;

    if (updatedDocument.document?.toString().trim() === "") {
      delete updateData.document;
    }

    if (updatedDocument.name?.toString().trim() === "") {
      delete updateData.name;
    }

    if (updateData.document && !getFileType(updateData.document)) {
      alert("Tipo de arquivo inválido");

      return;
    }

    dispatch(updateDocumentStore({ id: documentId, body: updateData }));
    setOpenUpdateModal(false);

    documentRouter
      .update(documentId, updateData)
      .then(function (response) {
        if (response.error) {
          alert(response.message);
        }
      })
      .finally(function () {
        getDocumentsFromApi();
      });
  }

  function onNameChangeUpdate(inputName: string) {
    setUpdatedDocument({ ...updatedDocument, name: inputName });
  }

  function onDocumentChangeUpdate(inputDocument: string) {
    setUpdatedDocument({ ...updatedDocument, document: inputDocument });
  }

  function updateDocumentForm() {
    return (
      <Form
        title="Editar Documento"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            placeholder: "Nome do documento",
            defaultValue: updatedDocument.name,
            onChangeCallback: onNameChangeUpdate,
          },
          {
            label: "Arquivo",
            inputType: "file",
            placeholder: "",
            onChangeCallback: onDocumentChangeUpdate,
          },
        ]}
        buttons={[
          {
            label: "Enviar",
            onClickCallback: updateDocument,
            color: "white",
            backGroundColor: "LimeGreen",
          },
        ]}
      />
    );
  }

  function downloadDocument(documentId: string) {
    const foundDocument = storedDocuments.find(function (item) {
      return item.id.toString() === documentId;
    });

    if (foundDocument) {
      const encodedDocument = foundDocument.document;
      const fileType = getFileType(encodedDocument);

      if (fileType) {
        const link = document.createElement("a");
        link.href = encodedDocument;
        link.download = `${foundDocument.name}.${fileType}`;
        link.click();
      }
    }
  }

  function viewDocument(documentId: string) {
    const foundDocument = storedDocuments.find(function (item) {
      return item.id.toString() === documentId;
    });

    if (foundDocument) {
      const encodedDocument = foundDocument.document;
      const fileType = getFileType(encodedDocument);

      if (
        fileType === "txt" ||
        fileType === "jpeg" ||
        fileType === "png" ||
        fileType === "pdf"
      ) {
        const byteString = atob(encodedDocument.split(",")[1]);
        const mimeType = encodedDocument
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([ab], { type: mimeType });
        setDocumentViewLink(URL.createObjectURL(blob));
        setDocumentViewModal(true);
      } else {
        alert("Visualização indisponível para esse formato, faça o download");
      }
    }
  }

  function documentViewModalContent() {
    return documentViewLink && documentViewLink.trim() !== "" ? (
      <StyledIframe id="docViewer" src={documentViewLink} />
    ) : (
      <></>
    );
  }

  return (
    <>
      <Title title="Documentos:" />
      <ActionsTitle createEntityCallback={openCreateDocumentModal} />
      <FlexBody components={renderCards()} />
      <Modal
        show={openCreationModal}
        setShowCallback={setOpenCreationModal}
        content={createDocumentForm()}
      />
      <Modal
        show={openUpdateModal}
        setShowCallback={setOpenUpdateModal}
        content={updateDocumentForm()}
      />
      <Modal
        show={documentViewModal}
        setShowCallback={setDocumentViewModal}
        content={documentViewModalContent()}
      />
    </>
  );
}
