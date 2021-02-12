import type { AppProps /*, AppContext */ } from 'next/app'
import React, { useEffect, useState } from 'react';
import Banner from '../components/banner';
import { UserContext, UserContextType } from '../context/UserContext';
import { User } from '../models/User';
import { getUser } from '../services/BookBingoApi';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const [ context, setContext ] = useState<UserContextType>(() => ({
        user: undefined,
        setUser: (user: User): void => setContext(oldContext => ({...oldContext, user: user}))
    }));

    useEffect(() => {
        if (!context.user) {
            getUser().then(user => context.setUser(user)).catch(e => console.log('oh no', e));
        }
    }, [context]);

    return <div className='app'>
        <UserContext.Provider value = {context} >
            <Banner/>
            <Component {...pageProps} />;
        </UserContext.Provider>
    </div>;
}
