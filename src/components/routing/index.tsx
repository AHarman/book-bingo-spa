import { Switch, Route } from 'react-router-dom';
import BooksPage from '../pages/books';
import LoginCallbackPage from '../pages/login/callback';
import BingoCardsPage from '../pages/cards';
import BingoCardPage from '../pages/cards/card';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import SelectBookForSquarePage from '../pages/cards/card/square';

export default function Routing(): JSX.Element {
    return <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route exact path='/login'><LoginPage/></Route>
        <Route exact path='/login/callback'><LoginCallbackPage/></Route>
        <Route exact path='/books'><BooksPage/></Route>
        <Route exact path='/cards'><BingoCardsPage/></Route>
        <Route exact path='/cards/:cardId'><BingoCardPage /></Route>
        <Route exact path='/cards/:cardId/:squareIndex'><SelectBookForSquarePage /></Route>
    </Switch>;
}
