import React from 'react';
import { BookTableProps, BookTableRow, columns as bookColumns, createBookRow } from '../bookTable';
import { SortableColumn, SortableTable } from '../sortableTable';

interface BookSelectTableRow extends BookTableRow {
    button: null;
}

const columns: SortableColumn<BookSelectTableRow>[] = [
    ...bookColumns,
    { key: 'button', header: '', isSortable: false, displayTransform: () => <button>Select this book</button> }
];

export default function BookSelectTable(props: BookTableProps): JSX.Element {
    const rows = props.books.map(book => createBookRow(book) as BookSelectTableRow);
    return (
        <div className='bookTable'>
            <SortableTable<BookSelectTableRow>
                columns={columns}
                rows={rows}
                initialSort={{ element: 'read', direction: 'desc' }}
            />
        </div>
    );
}
