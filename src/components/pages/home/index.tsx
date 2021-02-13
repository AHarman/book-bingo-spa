import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(): JSX.Element {
    return (
        <>
            <h2>Home page</h2>
            <Link to='/books'>If you are signed in, you can head here to see your books</Link>
        </>
    );
}