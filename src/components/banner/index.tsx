import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../../context/UserContext';
import './banner.module.css';

export default function Banner(): JSX.Element {
    const context = useContext(UserContext);

    return <header className="banner">
        <h1>Book Bingo</h1>
        {
            context.user ?
                <span>Welcome, {context.user.name}</span> :
                <Link href="/login">Log in</Link>
        }
    </header>;
}
