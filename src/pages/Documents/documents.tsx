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
    if (!getFileType(createdDocument.document || "")) {
      alert("Tipo de arquivo inválido");

      return;
    }

    dispatch(addDocumentStore(createdDocument));
    documentRouter
      .create(createdDocument)
      .then(function (response) {
        if (response.error) {
          alert(response.message);
        } else {
          setOpenCreationModal(false);
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
    documentRouter
      .update(documentId, updateData)
      .then(function (response) {
        if (response.error) {
          alert(response.message);
        } else {
          setOpenUpdateModal(false);
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
