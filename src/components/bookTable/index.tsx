import React, {  } from 'react';
import { BookshelfEntry } from '../../models/BookshelfEntry';
import { SortableTable } from '../sortableTable';
import { Column } from '../table';
import './BookTable.scss';

interface BookTableProps {
    books: BookshelfEntry[];
}

interface BookTableRow {
    key: string;
    cover: JSX.Element;
    title: string;
    authors: string;
    publicationYear: string;
    read: string;
    added: string;
}

function createRow(entry: BookshelfEntry): BookTableRow {
    return {
        key: entry.id,
        cover: <img src={entry.book.smallCoverUri} alt={entry.book.title + ' cover'}/>,
        title: entry.book.title,
        authors: entry.book.authors.map(author => author.name).join(', '),
        publicationYear: entry.book.publicationYear.toString(),
        read: entry.bookRead ? entry.bookRead?.toLocaleDateString() : '',
        added: entry.lastUpdated?.toLocaleDateString()
    };
}

export default function BookTable(props: BookTableProps): JSX.Element {
    const columns: Column<BookTableRow>[] = [
        { key: 'cover', header: 'Cover' },
        { key: 'title', header: 'Title' },
        { key: 'authors', header: 'Author' },
        { key: 'publicationYear', header: 'Publication Year' },
        { key: 'read', header: 'Finished on' },
        { key: 'added', header: 'Added to shelf' }
    ];

    return (
        <div className='bookTable'>
            <SortableTable<BookTableRow>
                columns={columns}
                rows={props.books.map(createRow)}
                initialSort={{ element: 'read', direction: 'desc' }}
            />
        </div>
    );
}
