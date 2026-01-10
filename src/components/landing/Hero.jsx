import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Hero.css';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];
    const [scrollProgress, setScrollProgress] = useState(0);
    const [heroProgress, setHeroProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Efecto parallax para Hero (video)
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                const heroRect = heroSection.getBoundingClientRect();

                // Calcular progreso del hero desde top hasta que sale del viewport
                if (heroRect.top <= 0 && heroRect.bottom >= 0) {
                    const heroScrolled = Math.abs(heroRect.top);
                    const heroTotal = heroRect.height;
                    const heroProgressValue = Math.min(heroScrolled / heroTotal, 1);
                    setHeroProgress(heroProgressValue);
                } else if (heroRect.bottom < 0) {
                    setHeroProgress(1);
                } else {
                    setHeroProgress(0);
                }
            }

            // Efecto parallax para la sección parallax
            const parallaxSection = document.querySelector('.parallax-section');
            if (!parallaxSection) return;

            const rect = parallaxSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = parallaxSection.offsetHeight;

            // Calcular progreso cuando la sección está en viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const scrolled = windowHeight - rect.top;
                const total = windowHeight + sectionHeight;
                const progress = Math.min(Math.max(scrolled / total, 0), 1);
                setScrollProgress(progress);
            } else if (rect.bottom < 0) {
                setScrollProgress(1);
            } else {
                setScrollProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section
                className="hero"
                id="que-es"
                style={{
                    opacity: scrollProgress > 0.5 ? 0 : 1,
                    visibility: scrollProgress > 0.5 ? 'hidden' : 'visible',
                    pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto',
                    transition: 'opacity 0.3s ease'
                }}
            >
                <div className="hero-bg">
                    <video
                        className="hero-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/images/videoFondoFrutiaWebb.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                    <div className="hero-container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1 className="hero-title">
                                    {t('hero.title')}
                                    <span className="highlight">{t('hero.highlight')}</span>
                                </h1>

                                <div className="hero-ctas">
                                    <a href="#ver-video" className="btn-secondary">
                                        {t('hero.watch')} →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN PARALLAX SEPARADA - SIN TRANSFORM */}
            <section className="parallax-section">
                <div className="parallax-sticky-container">
                    {/* Capa de fondo con efecto parallax */}
                    <div
                        className="parallax-background-layer"
                        style={{
                            transform: `scale(${1 + scrollProgress * 0.15})`,
                            opacity: 0.4
                        }}
                    />

                    <div
                        className="parallax-content"
                        style={{
                            opacity: scrollProgress > 0.1 && scrollProgress < 0.9 ? 1 : 0,
                            transform: `scale(${0.85 + (scrollProgress * 0.15)})`,
                            transition: 'opacity 0.3s ease'
                        }}
                    >
                        <h2 className="parallax-title">
                            {t('hero.slogan')}
                        </h2>
                        <p className="parallax-subtitle">
                            {t('hero.sloganSubtitle')}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;