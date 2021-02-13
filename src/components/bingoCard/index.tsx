import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BingoCardModel } from '../../models/BingoCard';
import { BingoCardSquareModel } from '../../models/BingoCardSquare';

import './BingoCard.scss';

export default function BingoCard({ card }: BingoCardProps): JSX.Element {
    return <div className="bingoCard">
        { card.squares.flat().map((square, index) => <BingoSquare key={index} square={square} index={index} />) }
    </div>;
}

interface BingoCardProps {
    card: BingoCardModel;
}

function BingoSquare(props: BingoSquareProps): JSX.Element {
    const { cardId } = useParams<{cardId: string}>();

    return <div className="bingoSquare">
        <h3>{props.square.title}</h3>
        <Link to={`${cardId}/${props.index}`}>Select a book</Link>
    </div>;
}

interface BingoSquareProps {
    square: BingoCardSquareModel;
    index: number;
}