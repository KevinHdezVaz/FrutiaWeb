import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Columna 1: Producto */}
                    <div className="footer-col reveal reveal-up delay-100">
                        <h3>{t('footer.product.title')}</h3>
                        <ul>
                            <li><a href="#que-es">{t('footer.product.home')}</a></li>
                            <li><a href="#modelo">{t('footer.product.why')}</a></li>
                            <li><a href="#features">{t('footer.product.features')}</a></li>
                            <li><a href="#how-it-works">{t('footer.product.howItWorks')}</a></li>
                        </ul>
                    </div>

                    {/* Columna 2: Descarga */}
                    <div className="footer-col reveal reveal-up delay-200">
                        <h3>{t('footer.download.title')}</h3>
                        <ul>
                            <li><a href="#" className="store-link"><FaApple /> App Store</a></li>
                            <li><a href="#" className="store-link"><FaGooglePlay /> Google Play</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Soporte */}
                    <div className="footer-col reveal reveal-up delay-300">
                        <h3>{t('footer.support.title')}</h3>
                        <ul>
                            <li><a href="#soporte">{t('footer.support.faq')}</a></li>
                            <li><a href="mailto:soporte@frutia.app">{t('footer.support.contact')}</a></li>
                            <li><a href="#">{t('footer.support.helpCenter')}</a></li>
                        </ul>
                    </div>

                    {/* Columna 4: Legal */}
                    <div className="footer-col reveal reveal-up delay-400">
                        <h3>{t('footer.legal.title')}</h3>
                        <ul>
                            <li><a href="#">{t('footer.legal.terms')}</a></li>
                            <li><a href="#">{t('footer.legal.privacy')}</a></li>
                            <li><a href="#">{t('footer.legal.cookies')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{t('footer.copyright')}</p>
                    <p className="footer-tagline">{t('footer.tagline')} 🍓</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;