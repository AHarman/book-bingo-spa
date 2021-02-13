import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { BookshelfEntry } from '../../../models/BookshelfEntry';
import { getBookshelf } from '../../../services/BookBingoApi';
import BookTable from '../../bookTable';
import './Books.scss';

export default function BooksPage(): JSX.Element {
    const context = useContext(UserContext);
    const [shelf, setShelf] = useState<BookshelfEntry[]>([]);

    useEffect(() => {
        if (context.user) {
            getBookshelf(context.user?.id, 'read').then(setShelf);
        }
    }, [context.user]);


    return (
        <div>
            <h3>Books!</h3>
            <BookTable books={shelf} />
        </div>
    );
}