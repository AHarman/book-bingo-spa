import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BooksPage from '../pages/books';
import LoginCallbackPage from '../pages/callback';
import BingoCardsPage from '../pages/cards';
import BingoCardPage from '../pages/cards/card';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';

export default function Routing(): JSX.Element {
    return <Switch>
        <Route path='/login'><LoginPage/></Route>
        <Route path='/login-callback'><LoginCallbackPage/></Route>
        <Route path='/books'><BooksPage/></Route>
        <Route path='/cards/:cardId'><BingoCardPage /></Route>
        <Route path='/cards'><BingoCardsPage/></Route>
        <Route exact path=''><HomePage/></Route>
    </Switch>;
}
