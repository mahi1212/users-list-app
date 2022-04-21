import axios from 'axios';
import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const Index = ({ props }) => {
    const router = useRouter();

    return (
        <Layout title="Users Page">
            <div className='container py-2 fs-4'>
                <ul><li>Total Number of users : {props.length}</li></ul>

                <table className="table border mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope='col'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.map((user) =>(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <button onClick={()=>{router.push(`/users/${user.id}`)}} className='btn btn-success text-dark mt-1'>Details</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Index;

export async function getStaticProps() {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        return {
            props: {
                props: data
            }
        }

    } catch (error) {

    }
}