import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Banner from '../banner';
import { UserContext, UserContextType } from '../../context/UserContext';
import { getUser } from '../../services/BookBingoApi';
import { UserModel } from '../../models/User';

import './App.scss';
import Routing from '../routing';

export default function App(): JSX.Element {
    const [ context, setContext ] = useState<UserContextType>(() => ({
        user: undefined,
        setUser: (user: UserModel): void => setContext(oldContext => ({...oldContext, user: user}))
    }));

    useEffect(() => {
        if (!context.user) {
            getUser().then(user => context.setUser(user)).catch(e => console.error('oh no', e));
        }
    }, [context]);

    return <BrowserRouter>
        <UserContext.Provider value = {context} >
            <div className='app'>
                <Banner/>
                <Routing/>
            </div>
        </UserContext.Provider>
    </BrowserRouter>;
}
