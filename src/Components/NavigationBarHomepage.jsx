import React from "react";
import {Navbar, Container, Nav, NavbarBrand} from "react-bootstrap" ;
import ITK from "../assets/Logo ITK.png";
import "../style/LandingPage.css";
import { useNavigate } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import Login from "../Page/Homepage";
import { NavDropdown } from "react-bootstrap";
import MagangItem from "../Page/MagangItem";
import LandingPage from "../Page/LandingPage";
import HalamanMentoring from "../Page/HalamanMentoring";

const NavigationBarHomepage = () => {

    const navigate = useNavigate();
    const LandingPage = () => {
        navigate(`/LandingPage`)
    };
    const Lowongan = () => {
        navigate(`/Lowongan`)
    };
    
    const MagangItemPage = () => {
        navigate('/Magang')
    };
    const HalamanMentoring = () => {
        navigate('/HalamanMentoring')
    };

    return (
        <div>
        <Navbar className="Navbar">
            <Container>
            <NavbarBrand className="Logo"><img className="navbar-logo" src={ITK} /> ITK CAREER CENTER</NavbarBrand>
            <Nav>
                    <NavDropdown title="Layanan">
                        <NavDropdown.Item onClick={Lowongan}>Lowongan</NavDropdown.Item>
                        <NavDropdown.Item onClick={MagangItemPage}>Magang</NavDropdown.Item>
                        <NavDropdown.Item onClick={HalamanMentoring}> Konsultasi Karir</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="Navigation" onClick={HalamanMentoring}>Konsultasi Karir</Nav.Link>
                    <a className="btn btn-primary" onClick={LandingPage} role="button">Keluar</a>
                </Nav>
            </Container>
        </Navbar>  
        </div>

        
    );
};

export default NavigationBarHomepage;