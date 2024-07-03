import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import Form from 'react-bootstrap/Form';
import { CiSearch } from "react-icons/ci";
import './nav.css'; // Import your custom CSS file

export default function Menubar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);

  return (
    <Navbar collapseOnSelect expand="lg" expanded={expanded} className="bg-body-light">
      <Container fluid>
        <Navbar.Brand id='nav-logo' as={Link} to="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="underline" defaultActiveKey="/" className="mx-auto" style={{ maxHeight: '200px' }} navbarScroll>
            <Nav.Link as={Link} to="/" onClick={handleNavClose} className="nav-link-custom" activeClassName="active" id='home-link'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/buycars" onClick={handleNavClose} className="nav-link-custom" activeClassName="active" id='other-links'>
              Buy Cars
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleNavClose} className="nav-link-custom" activeClassName="active" id='other-links'>
              Car Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={handleNavClose} className="nav-link-custom" activeClassName="active" id='other-links'>
              Contact Us
            </Nav.Link>
          </Nav>

          <Form className="d-flex align-items-center" id='searchbar'>
            <div className="position-relative">
              <Form.Control
                type="search"
                className="me-2"
                aria-label="Search"
                style={{ paddingRight: '48px', borderRadius: '0.25rem 0 0 0.25rem' }}
              />
              <button 
                className="position-absolute end-0"
                style={{ top: 0, bottom: 0, margin: 'auto', borderRadius: '0 0.25rem 0.25rem 0', border: 'solid 0.5px #CECECE', background: 'transparent', width: '50px'}}
              >
               <CiSearch />
              </button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
