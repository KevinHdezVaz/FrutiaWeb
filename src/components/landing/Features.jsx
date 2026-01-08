import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import '../styles/Features.css';

const Features = () => {
    const { t, i18n } = useTranslation();
    const observerRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const screenshots = i18n.language.startsWith('en')
        ? [
            '/images/screen1_ingles.webp',
            '/images/screen2_ingles.webp',
            '/images/screen3_ingles.webp',
            '/images/screen4_ingless.webp'
        ]
        : [
            '/images/screen1.webp',
            '/images/screen2.webp',
            '/images/screen3.webp',
            '/images/screen51.webp'
        ];

    return (
        <section className="features-section" id="features">
            <div className="container">
                {/* Header */}
                <div className="features-header reveal fade-up">
                    <span className="section-badge">{t('features.badge')}</span>
                    <h2 className="section-title">
                        {t('features.title')} <span className="highlight-red">{t('features.titleHighlight')}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t('features.subtitle')}
                    </p>
                </div>

                {/* Screenshots Grid */}
                <div className="app-screenshots">
                    {screenshots.map((screenshot, index) => (
                        <div
                            key={index}
                            className={`screenshot-card reveal fade-scale`}
                            style={{ '--delay': `${index * 0.15}s` }}
                        >
                            <img
                                src={screenshot}
                                alt={`Feature ${index + 1}`}
                                className="screenshot-image"
                            />
                        </div>
                    ))}
                </div>

                {/* Download Section */}
                <div className="download-section reveal fade-up">
                    <h3 className="download-title">{t('features.downloadTitle')}</h3>
                    <div className="download-badges">
                        <a href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link apple reveal fade-left"
                        >
                            <FaApple className="store-icon" />
                            <div className="store-text">
                                <span className="store-subtitle">{t('features.downloadOn')}</span>
                                <span className="store-main">App Store</span>
                            </div>
                        </a>

                        <a href="https://play.google.com/store/apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link google reveal fade-right"
                        >
                            <FaGooglePlay className="store-icon" />
                            <div className="store-text">
                                <span className="store-subtitle">{t('features.getOn')}</span>
                                <span className="store-main">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;