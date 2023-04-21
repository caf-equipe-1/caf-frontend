import { useEffect, useState } from "react";
import { FlexBody } from "../../components/flexBody";
import { Title } from "../../components/title";
import { HttpResponse } from "../../domain/types/http/httpResponse-dto";
import { makeDocumentRouterFactory } from "../../infra/api/factories/document/document-router-factory";
import { Document } from "../../domain/entities/document/document-entity";
import { Card } from "../../components/card";
import { ActionsTitle } from "../../components/actionsTitle";

export function Documents() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const documentRouter = makeDocumentRouterFactory();

  function getDocumentsFromApi() {
    documentRouter.getAll().then(function (response: HttpResponse<Document[]>) {
      if (response.body) {
        setDocuments(response.body);
      }
    });
  }

  function deleteDocument(documentId: string) {
    documentRouter.delete(documentId).then(() => {
      getDocumentsFromApi();
    });
  }

  function editDocument(documentId: string) {
    alert("Implementar navegação para página de edição.");
  }

  function createDocument() {
    alert("Implementar navegação para página de criação.");
  }

  function renderCards() {
    return documents.map(function (document, index) {
      return (
        <Card
          title={document.name}
          entityId={document.id}
          content={[]}
          key={index}
          deleteCallback={deleteDocument}
          editCallback={editDocument}
        />
      );
    });
  }

  useEffect(function () {
    getDocumentsFromApi();
  }, []);

  return (
    <>
      <Title title="Documentos:" />
      <ActionsTitle createEntityCallback={createDocument} />
      <FlexBody components={renderCards()} />
    </>
  );
}
