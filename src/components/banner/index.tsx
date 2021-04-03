import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './banner.scss';

export default function Banner(): JSX.Element {
    const context = useContext(UserContext);

    return <header className="banner">
        <h1>Book Bingo</h1>
        {
            context.user ?
                <span>Welcome, {context.user.name}</span> :
                <Link to="/login">Log in</Link>
        }
    </header>;
}
