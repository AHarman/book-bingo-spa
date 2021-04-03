import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { BookshelfEntryModel } from '../../../models/BookshelfEntry';
import { getBookshelf } from '../../../services/BookBingoApi';
import BookSelectTable from '../../bookTable';
import './Books.scss';

export default function BooksPage(): JSX.Element {
    const context = useContext(UserContext);
    const [shelf, setShelf] = useState<BookshelfEntryModel[]>([]);

    useEffect(() => {
        if (context.user) {
            getBookshelf(context.user?.id, 'read').then(setShelf);
        }
    }, [context.user]);


    return (
        <div>
            <h3>Books!</h3>
            <BookSelectTable books={shelf} />
        </div>
    );
}