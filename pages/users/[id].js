import axios from 'axios';
import React from 'react';
import Layout from '../../components/Layout';

const UserId = ({ props }) => {
    return (
        <Layout title='User Details'>
            <div className='fs-3 mt-5'>
                This is user id : {props.id} | Name : {props.name}. Details :
                <table className="table table-hover table-striped my-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={props.id}>
                            <td>{props.name}</td>
                            <td>{props.username}</td>
                            <td>{props.email}</td>
                            <td>{props.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default UserId;

export async function getServerSideProps(context) {
    const id = context.query.id;
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return {
            props: {
                props: data
            }
        }
    } catch (error) {
        console.log(error)
    }
}