import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import '../styles/Features.css';

const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: "🎯",
            title: t('features.feature1.title'),
            description: t('features.feature1.description')
        },
        {
            icon: "🍽️",
            title: t('features.feature2.title'),
            description: t('features.feature2.description')
        },
        {
            icon: "🔄",
            title: t('features.feature3.title'),
            description: t('features.feature3.description')
        },
        {
            icon: "💬",
            title: t('features.feature4.title'),
            description: t('features.feature4.description')
        },
        {
            icon: "📊",
            title: t('features.feature5.title'),
            description: t('features.feature5.description')
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="container">
                {/* Header */}
                <div className="features-header">
                    <span className="section-badge">{t('features.badge')}</span>
                    <h2 className="section-title">
                        {t('features.title')} <span className="highlight-red">{t('features.titleHighlight')}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t('features.subtitle')}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Download Section */}
                <div className="download-section">
                    <h3 className="download-title">{t('features.downloadTitle')}</h3>
                    <div className="download-badges">

                        <a href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link apple"
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
                            className="badge-link google"
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