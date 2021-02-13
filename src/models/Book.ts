import { AuthorModel } from './Author';

export interface BookModel {
    isbn: string;
    title: string;
    publicationYear: number;
    publicationMonth?: number;
    publicationDay?: number;
    coverUri: string;
    smallCoverUri: string;
    authors: AuthorModel[];
}