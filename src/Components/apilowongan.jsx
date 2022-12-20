import { Route, useEffect, useState } from "react";
import Axios from "axios";
import LowonganItem from "../Page/lowonganitem";
import NavigationBarHomepage from "./NavigationBarHomepage";
import PaginationPage from "./Pagination";
import "../style/LowonganItem.css"
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import DeskripsiLowongan from "../Page/deskripsilowongan";

const CallApiLowongan = () => {
  const navigate = useNavigate();
  const Homepage = () => {
    navigate('/Homepage')
  };
const DeskripsiLowongan = () => {
  navigate('/DeskripsiLowongan')
}

    const [dataLowongan, setLowongan] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3004/lowongan')
        .then(res => {
            console.log('data API', res.data)
            const responseAPI = res.data;
  
            setLowongan(responseAPI)
        }).catch(err => {
            console.log('error: ', err)
        })
    }, [])
  
    return (
      <div>
        <NavigationBarHomepage/>
        <header>
          <Nav.Link className="back" onClick={Homepage}>Kembali</Nav.Link>
          <h1 className="judul">Lowongan</h1>
        </header>
        <div className='halaman-lowongan'>
          <p className="halaman"></p>
          <div className='content'>
            {dataLowongan.map(lowongan => {
              return (
                <LowonganItem 
                id = {lowongan.id} 
                logo={lowongan.logo}  
                nama={lowongan.nama}
                tanggal={lowongan.tanggal}
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

export default CallApiLowongan;