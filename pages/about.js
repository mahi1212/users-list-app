import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/dist/client/router';

const About = () => {
    const router = useRouter();
    return (
        <Layout title="About Us Page">
            <h3 className='text-info py-5 text-center'>This page is about fetching data of user from JSon place holder and show their details</h3>
            <div className='text-center'>
                <button onClick={() => { router.push('/') }} className='btn btn-primary mb-5'> Home Page </ button >
            </div>
        </Layout>
    );
};

export default About;