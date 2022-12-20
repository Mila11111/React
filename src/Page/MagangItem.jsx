import React from 'react';
import { useNavigate } from 'react-router';
import "../style/LowonganItem.css";
import DeskripsiMagang from './deskripsimagang';

const MagangItem = (props) => {
  const navigate = useNavigate();
  const DeskripsiMagang = () => {
    navigate('/DeskripsiMagang')
  };  
  const {nama, logo, tanggal, deskripsi} = props;
  return (
    <div className='magang-item'>
      <img className='logo-image'onClick={DeskripsiMagang} src={props.logo} alt='post' />
      <div className='content-detail'>
        <h1 className='nama' onClick={DeskripsiMagang}>{props.nama}</h1>
        <p className='tanggal' onClick={DeskripsiMagang}>{props.tanggal}</p>
        <p className='deskripsi'>{props.deskripsi}</p>
      </div>
    </div>
  )
};

export default MagangItem;
