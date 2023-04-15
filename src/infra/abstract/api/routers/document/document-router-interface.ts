import { CreateDocumentDto } from "../../../../../domain/dtos/document/createDocument-dto";
import { UpdateDocumentDto } from "../../../../../domain/dtos/document/updateDocument-dto";
import { Document } from "../../../../../domain/entities/document/document-entity";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../../domain/types/message/message.type";

export interface DocumentRouterInterface {
  create(
    documentInfo: CreateDocumentDto
  ): Promise<HttpResponse<Document> | Message>;
  update(
    documentId: string,
    documentInfo: UpdateDocumentDto
  ): Promise<HttpResponse<Document> | Message>;
  delete(documentId: string): Promise<HttpResponse<Document> | Message>;
  getOne(documentId: string): Promise<HttpResponse<Document> | Message>;
  getAll(): Promise<HttpResponse<Document[]> | Message>;
}
