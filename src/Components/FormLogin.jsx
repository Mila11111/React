import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router';
import "../Page/Homepage";
import "../style/Form.css";
import HalamanSignup from '../Page/HalamanSignup';

const FormLogin = () => {
    const navigate = useNavigate();
    const HalamanSignup = () => {
        navigate('/HalamanSignup')
    };
    const Homepage = () => {
        navigate('/Homepage')
    };
    

    return (
        <div className='form__container'>
            <h2 className="main-header">ITK Career Center</h2>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Lambang_ITK.png/507px-Lambang_ITK.png'></img>
            <Form className="create-form">
                <Form.Field>
                    <label>Username</label>
                    <input type='email' placeholder='Username'/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' placeholder='Password'/>
                </Form.Field>
                <button className='loginbtn' type='submit' onClick={Homepage}>Login</button>
                <p className="main-footer">Belum Punya Akun? <a onClick={HalamanSignup} className="signupbtn">Sign Up</a> </p>
            </Form>
        </div>
    )

}

export default FormLogin;
