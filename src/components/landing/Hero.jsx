import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Hero.css';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    const images = {
        iphone: {
            es: '/images/iphoneCaptura.webp',
            en: '/images/img_plan_ingle.webp'
        }
    };

    return (
        <section className="hero" id="que-es">
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

            {/* ⭐ AGREGAR VIDEO DE FONDO EN EL FOOTER */}
            <div className="hero-footer reveal reveal-up">

                <div className="footer-text-section">
                    <h2 className="hero-slogan">{t('hero.slogan')}</h2>
                    <p className="hero-subtitle-footer">
                        {t('hero.sloganSubtitle')}
                    </p>
                </div>



            </div>
        </section>
    );
};

export default Hero;