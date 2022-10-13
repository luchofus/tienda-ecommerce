import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
return (
<nav className='navbar navbar-expand-lg'>
    <div className='container-fluid navbar-container'>
        <a className='navbar-brand logo-navbar' href="#">Logo</a>
        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' aria-current="page" href='#'>GamingStore</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Acción</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Aventura</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Deportes</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Disparos</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Terror</a>
                </li>
            </ul>
        </div>
        <div className=''>
            <CartWidget/>
        </div>
    </div>
</nav>
)
}
export default NavBar