import { BookModel } from './Book';

export interface BookshelfEntryModel {
    id: string;
    bookStarted?: Date;
    bookRead?: Date;
    added: Date;
    lastUpdated: Date;
    book: BookModel;
}