import React from 'react'
import './Footer.css'
import Icono from '../img/icono.png'

export const Footer = () => {
  return (
    <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Inicio</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Palabra</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Social</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Preguntas</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Sobre nosotros</a></li>
      </ul>
      <p className="text-center text-body-secondary">&copy; 2024 Get Tech, Inc</p>
      <center><img src={Icono} alt="icono" /></center>
    </footer>
  </div>
  )
}
