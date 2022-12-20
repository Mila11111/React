import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router';
import FormMentoring from '../Components/FormMentoring';

const HalamanMentoring = () => {
    return (
        <div>
            <section className='bg-admin'>
                <div className='form__mentoring'>
                    <FormMentoring />
                </div>
            </section>
        </div>
    );
};

export default HalamanMentoring; 