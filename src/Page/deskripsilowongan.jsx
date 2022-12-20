import { Route, useEffect, useState } from "react";
import Axios from "axios";
import DLow from "./DLow";
import NavigationBarHomepage from "../Components/NavigationBarHomepage";
import { Nav } from "react-bootstrap";
import LowonganItem from "./lowonganitem";
import "../style/HalamanMagang.css";
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';

const DeskripsiLowongan = () => {
  const navigate = useNavigate();
  const Homepage = () => {
    navigate('/lowongan')
  };
  const [dataLowongan, setLowongan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      Axios.get('http://localhost:3006/lowongan/' + id)
        .then(res => {
          console.log('data API', res.data)
          const responseAPI = res.data;

          setLowongan(responseAPI)
        }).catch(err => {
          console.log('error: ', err)
        })
    }
  }, [id])

  return (
    <div>
      <NavigationBarHomepage />
      <header>
        <Nav.Link onClick={Homepage}>Kembali</Nav.Link>
        <h1>Lowongan</h1>
        <div className='halaman-lowongan'>
          <div className='content'>
            {/* {dataLowongan.map(lowongan => {
              return ( */}
            <DLow
              key={dataLowongan.id}
              nama={dataLowongan.nama}
              deskripsi={dataLowongan.deskripsi}
            />
            {/* )
            })
            } */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default DeskripsiLowongan;