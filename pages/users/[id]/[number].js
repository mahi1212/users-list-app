import React from 'react';
import { useRouter } from 'next/router';

const UserNumber = () => {
    const router = useRouter();
    return (
        <div>
            <h2>This is for user number {router.query.number}</h2>
        </div>
    );
};

export default UserNumber;