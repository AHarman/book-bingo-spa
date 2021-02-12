import { useState, useEffect } from 'react';
import { getRequestToken } from '../../services/BookBingoApi';

export default function Login(): JSX.Element {
    const [token, setToken] = useState('');

    useEffect(() => {
        getRequestToken().then(setToken);
    }, []);

    return token ?
        <Content token={token} /> :
        <p>Loading</p>;
}

function Content(props: {token: string}): JSX.Element {
    return (
        <div>
            <p> We need you to log in to goodreads so we can access your reading history. Please do so now. </p>
            <a href={`https://www.goodreads.com/oauth/authorize?oauth_callback=http://localhost:3000/login-callback&oauth_token=${props.token}`}>Log in to Goodreads</a>
        </div>
    );
}
