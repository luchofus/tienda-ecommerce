import React from 'react'
import CartWidget from './CartWidget'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
return (
<Navbar className='navbar navbar-expand-lg'>
    <div className='container-fluid navbar-container'>
        <Link to='/' className='navbar-brand logo-navbar'>
            <img className='img-logo' src='../src/images/logo-2.png'></img>
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <Nav className="me-auto navbar-nav">
                <li className='nav-item'>
                    <Link to='/' className='nav-link nav-home' aria-current="page">GamingStore</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/categoria/Acción' className='nav-link' aria-current="page">Acción</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/categoria/Aventura' className='nav-link' aria-current="page">Aventura</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/categoria/Deportes' className='nav-link' aria-current="page">Deportes</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/categoria/Disparos' className='nav-link' aria-current="page">Disparos</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/categoria/Terror' className='nav-link' aria-current="page">Terror</Link>
                </li>
            </Nav>
        </div>
        <div className=''>
            <CartWidget/>
        </div>
    </div>
</Navbar>
)
}
export default NavBar