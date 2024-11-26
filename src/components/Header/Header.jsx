import { Link } from 'react-router-dom';
import React from 'react'
import Icono2 from '../img/icono2.png'
import { useCartStore } from '../../stores/cartStore'; 

export const Header = () => {
  const totalItems = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
);
  return (
    <header className="p-3 text-bg-info">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img src={Icono2} alt="icono2" />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/products">Todos los productos</Link></li>

        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Buscar productos.." aria-label="Search"></input>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2"><Link to="/about">Sobre nostros</Link></button>
          <button type="button" className="btn btn-outline-light me-2"><Link to="/contact">Contactanos</Link></button>
        </div>
        <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none relative">
                    <Link to="/cart">
                        Cart
                        {totalItems > 0 && (
                            <span className="absolute top-[-10px] right-[-10px] bg-[rgb(255,225,21)] text-[rgb(45,58,75)] rounded-full text-[12px] w-[20px] h-[20px] flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </li>
      </div>
    </div>
  </header>
  )
}