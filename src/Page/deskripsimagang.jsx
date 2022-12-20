import { Route, useEffect, useState } from "react";
import Axios from "axios";
import DMag from "./DMag";
import NavigationBarHomepage from "../Components/NavigationBarHomepage";
import Button from 'react-bootstrap/Button';
import { Nav } from "react-bootstrap";
import "../style/HalamanMagang.css"
import MagangItem from "./MagangItem";
import { useNavigate } from "react-router";


const DeskripsiMagang = () => {
  const navigate = useNavigate();
  const Homepage = () => {
    navigate('/Homepage')
  };
    const [dataMagang, setMagang] = useState([]);
    useEffect((id) => {
        Axios.get('http://localhost:3006/magang')
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
        <Nav.Link onClick={Homepage} >Kembali</Nav.Link>
          <h1 >Magang</h1>
        </header>
        <div className='halaman-magang'>
          <p className="halaman"></p>
          <div className='content'>
            {dataMagang.map(magang => {
              return (
                <DMag
                key = {magang.id} 
                nama={magang.nama}
                deskripsi={magang.deskripsi}
                />
              )
            })
            }
          </div>
        </div>
      </div>
    );
  }

export default DeskripsiMagang;