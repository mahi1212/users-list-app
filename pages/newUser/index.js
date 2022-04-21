import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import axios from 'axios';

const About = ({ newUser }) => {
    const router = useRouter();

    return (
        <Layout title="NewUser Page">
            <div className='container'>
                <h3 className='py-3'>New User Added:{newUser.length}</h3>
                <h4>Click on the row to find details</h4>
                <div className='text-muted'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newUser.map((user)=>(
                                <tr key={user.name} onClick={()=>{router.push(`/newUser/${user.id}`)}}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default About;

export async function getStaticProps() {
    try {
        const { data } = await axios.get('http://localhost:3000/api/test')
        return{
            props: {
                newUser: data
            }
        }

    } catch (error) {
        console.log(error)
    }
}