import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import axios from 'axios';
import HalamanLogin from '../Page/HalamanLogin';
import { useNavigate } from 'react-router';

export default function FormSignup() {
    const navigate = useNavigate();
    const HalamanLogin = () => {
        navigate('/HalamanLogin')
    };

    const [Nama, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [cPassword, setcPassword] = useState('');
    const postData = () => {
        axios.post('https://639ab90131877e43d673fdfb.mockapi.io/user', {
            Nama,
            Email,
            Password,
            cPassword
        })
    }
    return (
        <div className='form__container'>
            <h2 className="main-header">ITK Career Center</h2>
            <img className='logo' src='logo ITK.png'></img>
            <Form className="create-form">
                <Form.Field>
                    <label>Nama</label>
                    <input placeholder='Nama' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Group widths='equal'>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Konfirmasi Password</label>
                    <input type='password' placeholder='Password' onChange={(e) => setcPassword(e.target.value)}/>
                </Form.Field>
                </Form.Group>
                <button onClick={postData} className='signupbtn' type='submit'>Signup</button>
                <p className="main-footer">Sudah Punya Akun? <a onClick={HalamanLogin} className="loginbtn">Login</a> </p>
            </Form>
        </div>
    )
}