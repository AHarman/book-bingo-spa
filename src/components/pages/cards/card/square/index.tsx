import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../../../context/UserContext';
import cards from '../../../../../data/bingo-cards';
import { BookshelfEntryModel } from '../../../../../models/BookshelfEntry';
import { getBookshelf } from '../../../../../services/BookBingoApi';
import BookSelectTable from '../../../../bookSelectTable';

export default function SelectBookForSquarePage(): JSX.Element {
    const { cardId, squareIndex } = useParams<RouteParams>();
    const card = cards[cardId];
    const square = card.squares.flat()[parseInt(squareIndex)];

    const context = useContext(UserContext);
    const [shelf, setShelf] = useState<BookshelfEntryModel[]>([]);

    useEffect(() => {
        if (context.user) {
            getBookshelf(context.user?.id, 'read').then(setShelf);
        }
    }, [context.user]);

    return <>
        <h2>{card.name}</h2>
        <h3>{square.title}</h3>
        <p>{square.description}</p>
        <BookSelectTable books={shelf}/>
    </>;
}

interface RouteParams {
    cardId: string;
    squareIndex: string;
}