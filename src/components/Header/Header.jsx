import { Link } from 'react-router-dom';
import React from 'react'
import Icono2 from '../img/icono2.png'

export const Header = () => {
  return (
    <header className="p-3 text-bg-info">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img src={Icono2} alt="icono2" />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/products">Tienda</Link></li>
          <li><a href="#" className="nav-link px-2 text-white">Tecnología</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Ayuda</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Buscar productos.." aria-label="Search"></input>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2"><Link to="/about">Sobre nostros</Link></button>
          <button type="button" className="btn btn-outline-light me-2"><Link to="/contact">Contactanos</Link></button>
        </div>
      </div>
    </div>
  </header>
  )
}