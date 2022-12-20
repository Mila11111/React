import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'

export default function FormAdmin() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://639ab90131877e43d673fdfb.mockapi.io/user`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const UserData = () => {
        axios.get(`https://639ab90131877e43d673fdfb.mockapi.io/user`)
            .then((UserData) => {
                 setAPIData(UserData.data);
             })
    }

    const FormData = () => {
        axios.get(`https://639ab90131877e43d673fdfb.mockapi.io/formulir`)
            .then((FormData) => {
                 setAPIData(FormData.data);
             })
    }

    const DeleteUser = (id) => {
        axios.delete(`https://639ab90131877e43d673fdfb.mockapi.io/user/${id}`)
        .then(() => {
            UserData();
        })
    }

    const DeleteForm = (id) => {
        axios.delete(`https://639ab90131877e43d673fdfb.mockapi.io/formulir/${id}`)
     .then(() => {
        FormData();
    })
}

    return (
        <div className='form__container'>
            <div className='main-header'>
                Admin Page <a href='#'><button className='loginbtn'>Logout</button></a>
            </div>
            <Table className='UserTable'>
                <Table.Header>
                    <p className="sub-header">Data Pengguna</p>
                    <Table.Row>
                        <Table.HeaderCell>Nama</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Aksi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.Nama}</Table.Cell>
                                <Table.Cell>{data.Email}</Table.Cell>
                                <Table.Cell>{data.Password}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => DeleteUser(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

            <Table className='FormTable'>
                <Table.Header>
                    <p className="sub-header">Data Formulir</p>
                    <Table.Row>
                        <Table.HeaderCell>Nama</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Nomor Handphone</Table.HeaderCell>
                        <Table.HeaderCell>Pilihan Hari</Table.HeaderCell>
                        <Table.HeaderCell>Pilihan Sesi</Table.HeaderCell>
                        <Table.HeaderCell>Keluhan</Table.HeaderCell>
                        <Table.HeaderCell>Aksi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.Nama}</Table.Cell>
                                <Table.Cell>{data.Email}</Table.Cell>
                                <Table.Cell>{data.Nomor}</Table.Cell>
                                <Table.Cell>{data.Hari}</Table.Cell>
                                <Table.Cell>{data.Sesi}</Table.Cell>
                                <Table.Cell>{data.Keluhan}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => DeleteForm(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}