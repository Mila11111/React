import { Route, useEffect, useState } from "react";
import Axios from "axios";
import MagangItem from "../Page/MagangItem";
import NavigationBarHomepage from "./NavigationBarHomepage";
import PaginationPage from "./Pagination";
import Button from 'react-bootstrap/Button';
import { Nav } from "react-bootstrap";
import "../style/HalamanMagang.css"
import { useNavigate } from "react-router";
import DeskripsiMagang from "../Page/deskripsimagang";


const CallApiMagang = () => {
  const navigate = useNavigate();
  const Homepage = () => {
    navigate('/Homepage')
  };
  const DeskripsiMagang = () => {
    navigate('/DeskripsiMagang')
  };

    const [dataMagang, setMagang] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3004/magang')
        .then(res => {
            console.log('data API', res.data)
            const responseAPI = res.data;

            setMagang(responseAPI)
        }).catch(err => {
            console.log('error: ', err)
        })
    }, [])

    return (
      <div>
        <NavigationBarHomepage/>
        <header>
        <Nav.Link className='back' onClick={Homepage} >Kembali</Nav.Link>
          <h1 className='judul'>Magang</h1>
        </header>
        <div className='halaman-magang'>
          <p className="halaman"></p>
          <div className='content'>
            {dataMagang.map(magang => {
              return (
                <MagangItem 
                key = {magang.id} 
                logo={magang.logo}  
                nama={magang.nama}
                tanggal={magang.tanggal}
                />
              )
            })
            }
          </div>
          <PaginationPage/>
        </div>
      </div>
    );
  }

export default CallApiMagang;