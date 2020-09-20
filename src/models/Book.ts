import { Author } from './Author';

export interface Book {
    isbn: string;
    title: string;
    publicationYear: number;
    publicationMonth?: number;
    publicationDay?: number;
    coverUri: string;
    smallCoverUri: string;
    authors: Author[];
}