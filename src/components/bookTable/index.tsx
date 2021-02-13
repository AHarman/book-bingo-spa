import React from 'react';
import { BookshelfEntryModel } from '../../models/BookshelfEntry';
import { SortableColumn, SortableTable } from '../sortableTable';
import './BookTable.scss';

export interface BookTableProps {
    books: BookshelfEntryModel[];
}

export interface BookTableRow {
    key: string;
    cover: CoverProps;
    title: string;
    authors: string;
    publicationYear?: Number;
    read?: Date;
    added: Date;
}

interface CoverProps {
    uri: string;
    title: string;
}

export const columns: SortableColumn<BookTableRow>[] = [
    { key: 'cover', header: 'Cover', isSortable: false, displayTransform: Cover},
    { key: 'title', header: 'Title', isSortable: true},
    { key: 'authors', header: 'Author', isSortable: true },
    { key: 'publicationYear', header: 'Publication Year', isSortable: true, displayTransform: (year: Number): string => year.toString() },
    { key: 'read', header: 'Finished on', isSortable: true, displayTransform: dateToString },
    { key: 'added', header: 'Added to shelf', isSortable: true, displayTransform: dateToString }
];

export function createBookRow(entry: BookshelfEntryModel): BookTableRow {
    return {
        key: entry.id,
        cover: {uri: entry.book.smallCoverUri, title: entry.book.title },
        title: entry.book.title,
        authors: entry.book.authors.map(author => author.name).join(', '),
        publicationYear: entry.book.publicationYear,
        read: entry.bookRead,
        added: entry.lastUpdated
    };
}

function dateToString(dateRead?: Date): string {
    return dateRead ? dateRead?.toLocaleDateString() : '';
}

function Cover(props: CoverProps): JSX.Element {
    return <img src={props.uri} alt={props.title + ' cover'}/>;
}

export default function BookTable(props: BookTableProps): JSX.Element {
    return (
        <div className='bookTable'>
            <SortableTable<BookTableRow>
                columns={columns}
                rows={props.books.map(createBookRow)}
                initialSort={{ element: 'read', direction: 'desc' }}
            />
        </div>
    );
}
