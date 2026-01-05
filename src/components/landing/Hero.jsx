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
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-visual">
                            <div className="phone-mockup">
                                <img
                                    src={images.iphone[currentLang]}
                                    alt={t('hero.imageAlt')}
                                    className="iphone-mockup-img"
                                />
                            </div>
                        </div>

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

            <div className="hero-footer reveal reveal-up">
                <div className="footer-content">
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