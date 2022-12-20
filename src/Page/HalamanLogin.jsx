import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router';
import FormLogin from '../Components/FormLogin';

const HalamanLogin = () => {
    return (
        <div>
            <section className='bg-login'>
                <div className='form__login'>
                    <FormLogin />
                </div>
            </section>
        </div>
    );
};

export default HalamanLogin;