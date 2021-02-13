import { BingoCardSquareModel } from './BingoCardSquare';
import { BookModel } from './Book';

export interface UserBingoCardSquareModel extends BingoCardSquareModel {
    book: BookModel;
}