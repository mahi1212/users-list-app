import Link from 'next/link';

const Header = () => {
    return (
        <div className='bg-dark py-4 text-white fs-3'>
            <ul style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Link href="/">Home</Link>
                <Link href="/users">Users</Link>
                <Link href="/newUser">New User</Link>
            </ul>
        </div>
    );
};

export default Header;