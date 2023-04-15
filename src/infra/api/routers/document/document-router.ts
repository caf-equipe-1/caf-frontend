import { CreateDocumentDto } from "../../../../domain/dtos/document/createDocument-dto";
import { UpdateDocumentDto } from "../../../../domain/dtos/document/updateDocument-dto";
import { Document } from "../../../../domain/entities/document/document-entity";
import { HttpResponse } from "../../../../domain/types/http/httpResponse-dto";
import { DocumentRouterInterface } from "../../../abstract/api/routers/document/document-router-interface";

export class DocumentRouter implements DocumentRouterInterface {
  public create(
    documentInfo: CreateDocumentDto
  ): Promise<HttpResponse<Document>> {
    throw new Error("Not implemented");
  }

  public update(
    documentId: string,
    documentInfo: UpdateDocumentDto
  ): Promise<HttpResponse<Document>> {
    throw new Error("Not implemented");
  }

  public delete(documentId: string): Promise<HttpResponse<Document>> {
    throw new Error("Not implemented");
  }

  public getOne(documentId: string): Promise<HttpResponse<Document>> {
    throw new Error("Not implemented");
  }

  public getAll(): Promise<HttpResponse<Document[]>> {
    throw new Error("Not implemented");
  }
}
