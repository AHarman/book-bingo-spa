import { BingoCardSquareModel } from './BingoCardSquare';

export interface BingoCardModel {
    name: string;
    url: string;
    squares: Array<Array<BingoCardSquareModel>>;
}