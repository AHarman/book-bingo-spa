import { BingoCardSquare } from './BingoCardSquare';

export interface BingoCard {
    name: string;
    url: string;
    card: Array<Array<BingoCardSquare>>;
}