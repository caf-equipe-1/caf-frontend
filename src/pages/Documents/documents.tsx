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

export function Documents() {
  const [documents, setDocuments] = useState<Document[]>([]);
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

  function getDocumentsFromApi() {
    documentRouter.getAll().then(function (response: HttpResponse<Document[]>) {
      if (response.body) {
        setDocuments(response.body);
      }
    });
  }

  function renderCards() {
    return documents.map(function (document, index) {
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
        />
      );
    });
  }

  function deleteDocument(documentId: string) {
    if (window.confirm("Deseja apagar esse documento?")) {
      documentRouter.delete(documentId).then(() => {
        getDocumentsFromApi();
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
    documentRouter.create(createdDocument).then(function (response) {
      if (response.error) {
        alert(response.message);
      } else {
        setOpenCreationModal(false);
        getDocumentsFromApi();
      }
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
    const foundDocument = documents.find(function (item) {
      return item.id.toString() === documentId;
    });

    if (foundDocument) {
      setUpdatedDocument(foundDocument);
      setDocumentId(documentId);
    }

    setOpenUpdateModal(true);
  }

  function updateDocument() {
    documentRouter
      .update(documentId, updatedDocument)
      .then(function (response) {
        if (response.error) {
          alert(response.message);
        } else {
          setOpenUpdateModal(false);
          getDocumentsFromApi();
        }
      });
  }

  function onNameChangeUpdate(inputName: string) {
    setUpdatedDocument({ ...createdDocument, name: inputName });
  }

  function onDocumentChangeUpdate(inputDocument: string) {
    setUpdatedDocument({ ...createdDocument, document: inputDocument });
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
    alert("Implementar download de documentos.");
  }

  useEffect(function () {
    getDocumentsFromApi();
  }, []);

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
    </>
  );
}
