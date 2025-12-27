import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="que-es">
            {/* Background con overlay + partículas o gradiente dinámico */}
            <div className="hero-bg">


                {/* Overlay con degradado más elegante + ruido sutil */}
                <div className="hero-overlay"></div>

                {/* Contenido principal - layout asimétrico más moderno */}
                <div className="hero-container">
                    <div className="hero-content">
                        {/* Izquierda: Mockup con tilt y glow */}
                        <div className="hero-visual">
                            <div className="phone-mockup">
                                <img
                                    src="/images/iphoneCaptura.png"
                                    alt="Frutia App en iPhone - Pantalla de nutrición personalizada"
                                    className="iphone-mockup-img"
                                />
                                {/* Badge flotante opcional */}
                                <div className="badge-floating">4.9 ★ en App Store</div>
                            </div>
                        </div>

                        {/* Derecha: Textos + CTA */}
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Tu nutricionista personal
                                <span className="highlight">en el bolsillo</span>
                            </h1>

                            <p className="hero-subtitle">
                                Tu nutricionista 24/7 que te guía, ajusta y celebra cada logro contigo.
                            </p>

                            {/* CTA más potentes y visuales */}
                            <div className="hero-ctas">

                                <a href="#ver-video" className="btn-secondary">
                                    Ver cómo funciona →
                                </a>
                            </div>

                            {/* Social proof sutil */}
                            <div className="social-proof">
                                <span>Ya usado por +12,400 personas</span>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer hero - más limpio y con wave o transición */}
            <div className="hero-footer">
                <div className="footer-content">
                    <h2 className="hero-slogan">CONSTANCIA. CRITERIO. PROCESO.</h2>
                    <p className="hero-subtitle-footer">
                        Acompañamiento real para decisiones reales.
                        <span className="emoji">🥑💪</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;