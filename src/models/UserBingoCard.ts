import { BingoCardModel } from './BingoCard';
import { BookModel } from './Book';
import { UserBingoCardSquareModel } from './UserBingoCardSquare';

export interface UserBingoCardModel extends BingoCardModel {
    squares: Array<Array<UserBingoCardSquareModel>>;
    book: BookModel;
}