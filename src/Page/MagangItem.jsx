import React from 'react';
import { useNavigate } from 'react-router';
import "../style/LowonganItem.css";
import DeskripsiMagang from './deskripsimagang';

const MagangItem = (props) => {
  const navigate = useNavigate();
  const { nama, logo, tanggal, deskripsi } = props;
  return (
    <div className='magang-item'>
      <a className='link-item' href={'/DeskripsiMagang/' + props.id}>
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

export default MagangItem;
