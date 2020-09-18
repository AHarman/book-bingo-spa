import React, { useEffect, useState } from 'react';

import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Banner from '../banner';
import Books from '../pages/books';
import LoginCallback from '../pages/callback';
import Home from '../pages/home';
import Login from '../pages/login';
import { UserContext, UserContextType } from '../../context/UserContext';
import { getUser } from '../../services/BookBingoApi';
import { User } from '../../models/User';

export default function App(): JSX.Element {
    const [ context, setContext ] = useState(() => ({
        user: undefined,
        setUser: (user: User): void => setContext(oldContext => ({...oldContext, user: user}))
    } as UserContextType));

    useEffect(() => {
        if (!context.user) {
            getUser().then(user => context.setUser(user));
        }
    }, [context]);

    return <div className='app'>
        <UserContext.Provider value = {context} >
            <Banner/>
            <Switch>
                <Route path='/login'><Login/></Route>
                <Route path='/login-callback'><LoginCallback/></Route>
                <Route path='/books'><Books/></Route>
                <Route exact path=''><Home/></Route>
            </Switch>
        </UserContext.Provider>
    </div>;
}
