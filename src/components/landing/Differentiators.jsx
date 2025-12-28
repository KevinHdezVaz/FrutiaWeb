import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Differentiators.css';

const Differentiators = () => {
    const { t } = useTranslation();

    return (
        <section className="differentiators" id="modelo">
            <div className="diff-container">
                {/* Header */}
                <div className="diff-header">
                    <h2 className="diff-main-title animate-on-load" style={{ '--order': 1 }}>
                        {t('differentiators.title')} <span className="highlight-red">Frutia</span> {t('differentiators.titleEnd')}
                    </h2>
                    <p className="diff-subtitle animate-on-load" style={{ '--order': 2 }}>
                        {t('differentiators.subtitle')}
                    </p>
                </div>

                {/* Cards */}
                <div className="diff-grid">
                    <div className="diff-card animate-on-load" style={{ '--order': 3 }}>
                        <h3 className="card-title">{t('differentiators.card1.title')}</h3>
                        <p className="card-description">
                            {t('differentiators.card1.description')}
                        </p>
                    </div>

                    <div className="diff-card animate-on-load" style={{ '--order': 4 }}>
                        <h3 className="card-title">{t('differentiators.card2.title')}</h3>
                        <p className="card-description">
                            {t('differentiators.card2.description')}
                        </p>
                    </div>

                    <div className="diff-card animate-on-load" style={{ '--order': 5 }}>
                        <h3 className="card-title">{t('differentiators.card3.title')}</h3>
                        <p className="card-description">
                            {t('differentiators.card3.description')}
                        </p>
                    </div>
                </div>

                {/* Statement box */}
                <div className="diff-statement-box animate-on-load" style={{ '--order': 6 }}>
                    <p className="statement-text">
                        <strong>{t('differentiators.statement.bold')}</strong><br />
                        Frutia <span className="text-highlight">{t('differentiators.statement.highlight')}</span> {t('differentiators.statement.end')}
                    </p>
                </div>

                {/* Features list */}
                <div className="features-list animate-on-load" style={{ '--order': 7 }}>
                    <div className="feature-item">
                        <div className="feature-check">✓</div>
                        <span>{t('differentiators.features.feature1')}</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-check">✓</div>
                        <span>{t('differentiators.features.feature2')}</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-check">✓</div>
                        <span>{t('differentiators.features.feature3')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;