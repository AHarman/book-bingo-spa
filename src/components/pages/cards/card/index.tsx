import React from 'react';
import { useParams } from 'react-router-dom';
import cards from '../../../../data/bingo-cards';
import BingoCard from '../../../bingoCard';

export default function BingoCardPage(): JSX.Element {
    const { cardId } = useParams<{cardId: string}>();
    const card = cards[cardId];

    return <>
        <h2>{card.name}</h2>
        <BingoCard card={card} />
    </>;
}