import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                {/* Logo con icono */}
                <div className="nav-logo">
                    <img src="/images/fondoAppFrutia.png" alt="Frutia" className="logo-icon" />
                    <span className="logo-text">Frutia</span>
                </div>

                {/* Links de navegación */}
                <div className="nav-links">
                    <a href="#que-es">QUÉ ES</a>
                    <a href="#modelo">MODELO</a>
                    <a href="#resultados">RESULTADOS</a>
                    <a href="#soporte">SOPORTE</a>
                </div>

                {/* Botones de acción */}
                <div className="nav-actions">
                    <button className="nav-btn-primary">Descargar app</button>
                </div>

                {/* Mobile menu button */}
                <button className="mobile-menu-btn">
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;