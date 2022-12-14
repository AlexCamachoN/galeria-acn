import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '../logoblanco.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    
        <nav className="navbar  navbar-expand-lg bg-black  " style={{minHeight:'1vh',}}>
            <div className="container-fluid"  >
                <Link to='/home'>
                        <a className="navbar-brand " >
                            <img src={logo} height='70'/>
                        </a>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/home' >Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/promesa'> Alex Camacho</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/filtroinput'> Buscador</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/filtro/Abstracto'> Abstracto</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/filtro/Paisaje'> Paisaje</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/filtro/Bodegon'> Bodegon</NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Reconocimientos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Promesa</a>
                    </li> */}
                </ul>
                
                </div>
            </div>
        </nav>
    
  )
}

export default Nav