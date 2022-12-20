import React from 'react';
import "../style/HalamanMagang.css";

const DLow = (props) => {
  const { nama, deskripsi } = props;
  return (
    <div className='dlow'>
      <h1 className='nama'>{props.nama}</h1>
      <img className='deskripsi-image' src={props.deskripsi} alt='post' />
    </div>
  )
};

export default DLow;
