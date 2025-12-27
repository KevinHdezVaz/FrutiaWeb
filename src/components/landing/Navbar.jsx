import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const currentLang = i18n.language.split('-')[0];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="nav-logo">
                    <img src="/images/fondoAppFrutia.png" alt="Frutia" className="logo-icon" />
                    <span className="logo-text">Frutia</span>
                </div>

                {/* Desktop Links */}
                <div className="nav-links">
                    <a href="#que-es">{t('nav.home')}</a>
                    <a href="#modelo">{t('nav.why')}</a>
                    <a href="#features">{t('nav.features')}</a>
                    <a href="#how-it-works">{t('nav.howItWorks')}</a>
                    <a href="#soporte">{t('nav.faq')}</a>
                </div>

                {/* Desktop Actions */}
                <div className="nav-actions">
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

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    <a href="#que-es" onClick={closeMobileMenu}>{t('nav.home')}</a>
                    <a href="#modelo" onClick={closeMobileMenu}>{t('nav.why')}</a>
                    <a href="#features" onClick={closeMobileMenu}>{t('nav.features')}</a>
                    <a href="#how-it-works" onClick={closeMobileMenu}>{t('nav.howItWorks')}</a>
                    <a href="#soporte" onClick={closeMobileMenu}>{t('nav.faq')}</a>
                </div>

                <div className="mobile-menu-actions">
                    <button
                        onClick={() => {
                            changeLanguage(currentLang === 'es' ? 'en' : 'es');
                            closeMobileMenu();
                        }}
                        className="lang-switcher-mobile"
                    >
                        {currentLang === 'es' ? '🇺🇸 English' : '🇪🇸 Español'}
                    </button>

                    <button
                        className="nav-btn-primary-mobile"
                        onClick={() => {
                            window.location.href = '#features';
                            closeMobileMenu();
                        }}
                    >
                        {t('nav.download')}
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && <div className="menu-overlay" onClick={closeMobileMenu}></div>}
        </nav>
    );
};

export default Navbar;