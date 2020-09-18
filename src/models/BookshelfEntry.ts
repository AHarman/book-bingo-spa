import { Book } from './Book';

export interface BookshelfEntry {
    id: string;
    bookStarted: Date
    bookRead: Date
    added: Date
    lastUpdated: Date
    book: Book
}