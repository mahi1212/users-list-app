import axios from 'axios';
import React from 'react';
import Layout from '../../components/Layout';

const NewuserId = ({ props }) => {
    return (
        <Layout title="User Details Page">
            <div className='container'>
                <h2>User Details =&gt;  </h2>
                <table className="table border mt-3 fs-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr key={props.id}>
                                <td>{props.name}</td>
                                <td>{props.email}</td>
                                <td>{props.phone}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

        </Layout>
    );
};

export default NewuserId;

export async function getServerSideProps(context) {
    const { data } = await axios.get(`http://localhost:3000/api/test/${context.query.id}`)
    return {
        props: {
            props: data
        }
    }
}