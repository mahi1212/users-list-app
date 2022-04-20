import React from 'react';
import { useRouter } from 'next/router';

const UserId = () => {
    const route = useRouter();
    return (
        <div>
            This is user id router : {route.query.id}
        </div>
    );
};

export default UserId;