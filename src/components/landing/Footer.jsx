import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Columna 1: Producto */}
                    <div className="footer-col">
                        <h3>Producto</h3>
                        <ul>
                            <li><a href="#que-es">Inicio</a></li>
                            <li><a href="#modelo">Por qué Frutia</a></li>
                            <li><a href="#features">Características</a></li>
                            <li><a href="#how-it-works">Cómo Funciona</a></li>
                        </ul>
                    </div>

                    {/* Columna 2: Descarga */}
                    <div className="footer-col">
                        <h3>Descargar</h3>
                        <ul>
                            <li><a href="#" className="store-link"><FaApple /> App Store</a></li>
                            <li><a href="#" className="store-link"><FaGooglePlay /> Google Play</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Soporte */}
                    <div className="footer-col">
                        <h3>Soporte</h3>
                        <ul>
                            <li><a href="#soporte">Preguntas Frecuentes</a></li>
                            <li><a href="mailto:soporte@frutia.app">Contacto</a></li>
                            <li><a href="#">Centro de Ayuda</a></li>
                        </ul>
                    </div>

                    {/* Columna 4: Legal */}
                    <div className="footer-col">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Términos y Condiciones</a></li>
                            <li><a href="#">Política de Privacidad</a></li>
                            <li><a href="#">Aviso de Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Frutia. Todos los derechos reservados.</p>
                    <p className="footer-tagline">Tu nutricionista en el bolsillo 🍓</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;