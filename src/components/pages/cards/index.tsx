import React from 'react';
import { Link } from 'react-router-dom';
import cards from '../../../data/bingo-cards';

export default function BingoCardsPage(): JSX.Element {
    return <div>
        <h3>Please select a card</h3>
        <ul>
            {
            Object.keys(cards).map(
                cardId => <li key={cardId}><Link to={`cards/${cardId}`}>{ cards[cardId].name }</Link></li>
            )}
        </ul>
    </div>;
}