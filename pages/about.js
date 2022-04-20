import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/dist/client/router';

const About = () => {
    const router = useRouter();
    return (
        <Layout>
            <h1>This is our about page</h1>
            <button onClick={()=> {router.push('/')}} > Home Page </ button >
        </Layout>
    );
};

export default About;