import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Input, TextArea } from 'semantic-ui-react'
import Homepage from '../Page/Homepage';
import "../style/Form.css";

export default function FormMentoring() {

    const navigate = useNavigate();
        const Homepage =() => {
            navigate('/Homepage')
        }; 

    const PilihanHari = [
        { text: '-Pilihan Hari-', value: '' },
        { text: 'Senin', value: 'Senin' },
        { text: 'Selasa', value: 'Selasa' },
        { text: 'Rabu', value: 'Rabu' },
        { text: 'Kamis', value: 'Kamis' },
        { text: 'Jumat', value: 'Jumat' },
    ]

    const PilihanSesi = [
        { text: '-Pilihan Sesi-', value: '' },
        { key: '1', text: 'Sesi 1', value: 'Sesi 1' },
        { key: '2', text: 'Sesi 2', value: 'Sesi 2' },
        { key: '3', text: 'Sesi 3', value: 'Sesi 3' },
        { key: '4', text: 'Sesi 4', value: 'Sesi 4' },
    ]

    const [Nama, setNama] = useState('');
    const [Email, setEmail] = useState('');
    const [Nomor, setNomor] = useState('');
    const [Hari, setHari] = useState('');
    const [Sesi, setSesi] = useState('');
    const [Keluhan, setKeluhan] = useState('');

    const postData = () => {
        axios.post('https://639ab90131877e43d673fdfb.mockapi.io/formulir', {
            Nama,
            Email,
            Nomor,
            Hari,
            Sesi,
            Keluhan
        })
    }

    return (
        <div>
            <div className='form__container'>
                <h2 className="main-header">Formulir Mentoring</h2>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Nama'
                            name='Nama'
                            placeholder='Nama'
                            onChange={(e) => setNama(e.target.value)}
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            type='email'
                            label='Email'
                            name='Email'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Nomor Handphone'
                        name='Nomor'
                        placeholder='Nomor Handphone'
                        onChange={(e) => setNomor(e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        options={PilihanHari}
                        label={{ children: 'Pilihan Hari', htmlFor: 'form-select-control-gender' }}
                        name='Hari'
                        placeholder='Pilih Hari Senin - Jumat'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                        onChange={(e) => setHari(e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        options={PilihanSesi}
                        label={{ children: 'Pilihan Sesi', htmlFor: 'form-select-control-gender' }}
                        name='Sesi'
                        placeholder='Pilih Sesi 1 - Sesi 4'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                        onChange={(e) => setSesi(e.target.value)}
                    />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        label='Keluhan'
                        control={TextArea}
                        name='Keluhan'
                        placeholder='Keluhan'
                        onChange={(e) => setKeluhan(e.target.value)}
                    />
                    <button onClick={postData} className='loginbtn'  type='submit'>Submit</button>
                    <button onClick={Homepage} className='loginbtn'  type='submit'>Kembali</button>
                </Form>
            </div>
        </div>
    )
}
