import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Hero.css';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    // Configuración de imágenes por idioma
    const images = {
        iphone: {
            es: '/images/iphoneCaptura.png',
            en: '/images/img_plan_ingle.png'
        }
    };

    return (
        <section className="hero" id="que-es">
            <div className="hero-bg">
                <div className="hero-overlay"></div>

                <div className="hero-container">
                    <div className="hero-content">
                        {/* Izquierda: Mockup con tilt y glow */}
                        <div className="hero-visual">
                            <div className="phone-mockup">
                                <img
                                    src={images.iphone[currentLang]}
                                    alt={t('hero.imageAlt')}
                                    className="iphone-mockup-img"
                                />
                                <div className="badge-floating">{t('hero.badge')}</div>
                            </div>
                        </div>

                        {/* Derecha: Textos + CTA */}
                        <div className="hero-text">
                            <h1 className="hero-title">
                                {t('hero.title')}
                                <span className="highlight">{t('hero.highlight')}</span>
                            </h1>

                            <p className="hero-subtitle">
                                {t('hero.subtitle')}
                            </p>

                            <div className="hero-ctas">
                                <a href="#ver-video" className="btn-secondary">
                                    {t('hero.watch')} →
                                </a>
                            </div>

                            <div className="social-proof">
                                <span>{t('hero.socialProof')}</span>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-footer">
                <div className="footer-content">
                    <h2 className="hero-slogan">{t('hero.slogan')}</h2>
                    <p className="hero-subtitle-footer">
                        {t('hero.sloganSubtitle')}
                        <span className="emoji">🥑💪</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero; 