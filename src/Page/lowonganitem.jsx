import React from 'react';
import "../style/LowonganItem.css"
import DeskripsiLowongan from './deskripsilowongan';
import { useNavigate } from 'react-router';

const LowonganItem = (props) => {
  const navigate = useNavigate();
  const DeskripsiLowongan = (id) => {
    navigate('/DeskripsiLowongan/'+id)
  };
  const {id, nama, logo, tanggal, deskripsi} = props;
  return (
    <div className='lowongan-item'>
      <img className='logo-image' onClick={DeskripsiLowongan(id)} src={props.logo} alt='post' />
      <div className='content-detail'>
        <h1 className='nama' onClick={DeskripsiLowongan(id)}>{props.nama}</h1>
        <p className='tanggal' onClick={DeskripsiLowongan(id)}>{props.tanggal}</p>
        <p className='deskripsi' onClick={DeskripsiLowongan(id)}>{props.deskripsi}</p>
      </div>
    </div>
  )
};

export default LowonganItem;
