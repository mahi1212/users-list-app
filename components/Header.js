import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <ul style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/users">Users</Link>
            </ul>
        </div>
    );
};

export default Header;