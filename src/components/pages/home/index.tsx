import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(): JSX.Element {
    return (
        <>
            <h2>Home page</h2>
            <p>If you sign in using you GoodReads account we can limit the book selection to your "read" shelf</p>
            <Link to='/cards'>Click here to see which cards are available</Link>
        </>
    );
}