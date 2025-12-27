import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Producto</h3>
                        <ul>
                            <li><a href="#que-es">Qué es Frutia</a></li>
                            <li><a href="#modelo">Cómo Funciona</a></li>
                            <li><a href="#resultados">Resultados</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Guías</a></li>
                            <li><a href="#">Recetas</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Soporte</h3>
                        <ul>
                            <li><a href="#">Centro de Ayuda</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Términos</a></li>
                            <li><a href="#">Privacidad</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Frutia. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;