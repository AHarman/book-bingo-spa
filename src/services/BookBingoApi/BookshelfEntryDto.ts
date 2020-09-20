import { Book } from '../../models/Book';

export interface BookshelfEntryDto {
    id: string;
    bookStarted: string;
    bookRead: string;
    added: string;
    lastUpdated: string;
    book: Book;
}