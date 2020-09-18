import React from 'react';
import { BookshelfEntry } from '../../models/BookshelfEntry';
import './BookTable.scss';

interface BookTableProps {
    books: BookshelfEntry[]
}

export default function BookTable(props: BookTableProps): JSX.Element {
    return <table className='bookTable'>
        <thead>
            <th>Cover ▼</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Year</th>
        </thead>
        <tbody>
            {props.books.map(BookTableRow)}
        </tbody>
    </table>;
}

function BookTableRow(entry: BookshelfEntry): JSX.Element {

    return <tr key={entry.id}>
        <td><img src={entry.book.smallCoverUri} alt={entry.book.title + ' cover'}/></td>
        <td>{entry.book.title}</td>
        <td>{entry.book.authors.map(author => author.name).join(', ')}</td>
        <td>{entry.book.publicationYear}</td>
    </tr>;
}