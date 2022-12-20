import React from 'react';
import "../style/LowonganItem.css"
import DeskripsiLowongan from './deskripsilowongan';
import { useNavigate } from 'react-router';

const LowonganItem = (props) => {
  const navigate = useNavigate();
  const DeskripsiLowongan = () => {
    navigate('/DeskripsiLowongan/')
  };
  const { nama, logo, tanggal, deskripsi, key } = props;
  return (
    <div className='lowongan-item'>
      <a href={"/DeskripsiLowongan/" + props.id} class="link-item">
        <img className='logo-image' src={props.logo} alt='post' />
        <div className='content-detail'>
          <h1 className='nama'>{props.nama}</h1>
          <p className='tanggal'>{props.tanggal}</p>
          <p className='deskripsi'>{props.deskripsi}</p>
        </div>
      </a>
    </div>
  )
};

export default LowonganItem;
