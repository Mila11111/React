import React from "react";
import {Navbar, Container, Nav, NavbarBrand} from "react-bootstrap" ;
import ITK from "../assets/Logo ITK.png";
import "../style/LandingPage.css";
import { useNavigate } from "react-router";
import Homepage from "../Page/Homepage";
import { NavDropdown } from "react-bootstrap";
import Lowongan from "../Page/Lowongan";
import MagangItem from "../Page/MagangItem";
import HalamanMentoring from "../Page/HalamanMentoring";

const NavigationBar = () => {

    const navigate = useNavigate();
    const LowonganPage = () => {
        navigate(`/Lowongan`)
    };
    const Homepage = () => {
        navigate(`/Homepage`)
    };
    const MagangItemPage = () => {
        navigate('/Magang')
    };
    const HalamanMentoring = () => {
        navigate('/HalamanMentoring')
    };
    const HalamanLogin = () => {
        navigate('/HalamanLogin')
    };

    return (
        <div>
        <Navbar className="Navbar">
            <Container>
            <NavbarBrand className="Logo"><img className="navbar-logo" src={ITK} /> ITK CAREER CENTER</NavbarBrand>
                <Nav>
                    <NavDropdown title="Layanan">
                        <NavDropdown.Item onClick={LowonganPage}>Lowongan</NavDropdown.Item>
                        <NavDropdown.Item onClick={MagangItemPage}>Magang</NavDropdown.Item>
                        <NavDropdown.Item onClick={HalamanMentoring}> Konsultasi Karir</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="Navigation"  onClick={HalamanMentoring}>Konsultasi Karir</Nav.Link>
                    <a className="btn btn-primary" onClick={HalamanLogin} role="button">Masuk</a>
                </Nav>
            </Container>
        </Navbar>  

        </div>

        
    );
};

export default NavigationBar;