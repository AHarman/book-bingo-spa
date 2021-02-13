import React from 'react';
import { Link } from 'react-router-dom';
import cards from '../../../data/bingo-cards';

export default function BingoCardsPage(): JSX.Element {
    return <div>
        <h2>Please select a card</h2>
        <ul>
            {
                Object.keys(cards).map(
                    cardId => <li key={cardId}><Link to={`cards/${cardId}`}>{ cards[cardId].name }</Link></li>
            )}
        </ul>
    </div>;
}