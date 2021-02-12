import Link from 'next/link';

export default function Home(): JSX.Element {
    return (
        <>
            <h2>Home page</h2>
            <Link href='/books'>If you are signed in, you can head here to see your books</Link>
        </>
    );
}