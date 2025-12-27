import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Normalizar el idioma actual (solo primeras 2 letras)
    const currentLang = i18n.language.split('-')[0]; // 'es-MX' → 'es'

    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="nav-logo">
                    <img src="/images/fondoAppFrutia.png" alt="Frutia" className="logo-icon" />
                    <span className="logo-text">Frutia</span>
                </div>

                <div className="nav-links">
                    <a href="#que-es">{t('nav.home')}</a>
                    <a href="#modelo">{t('nav.why')}</a>
                    <a href="#features">{t('nav.features')}</a>
                    <a href="#how-it-works">{t('nav.howItWorks')}</a>
                    <a href="#soporte">{t('nav.faq')}</a>
                </div>

                <div className="nav-actions">
                    {/* Selector de idioma */}
                    <button
                        onClick={() => changeLanguage(currentLang === 'es' ? 'en' : 'es')}
                        className="lang-switcher"
                    >
                        {currentLang === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
                    </button>

                    <button className="nav-btn-primary" onClick={() => window.location.href = '#features'}>
                        {t('nav.download')}
                    </button>
                </div>

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