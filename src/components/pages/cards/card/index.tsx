import React from 'react';
import { useParams } from 'react-router-dom';
import cards from '../../../../data/bingo-cards';

export default function BingoCardPage(): JSX.Element {
    const  { cardId }: BingoCardParams = useParams();
    const card = cards[cardId];

    console.log("lol");

    return <ul>
        { card.card.flat().map(
            square => <li>
                <strong dangerouslySetInnerHTML={{__html: square.title}}></strong>
                <br/>
                <span dangerouslySetInnerHTML={{__html: square.description}}></span></li>
            )
        }
    </ul>;
}

interface BingoCardParams {
    cardId: string;
}