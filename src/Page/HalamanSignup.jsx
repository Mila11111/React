import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router';
import FormSignup from '../Components/FormSignup';

const HalamanSignup = () => {
    return (
        <div>
            <section className='bg-signup'>
                <div className='form__signup'>
                    <FormSignup />
                </div>
            </section>
        </div>
    );
};

export default HalamanSignup;