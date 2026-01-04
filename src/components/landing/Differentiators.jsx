import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Differentiators.css';

const Differentiators = () => {
    const { t } = useTranslation();

    return (
        <section className="differentiators" id="modelo">
            <div className="diff-container">

                {/* Header con badge animado */}
                <div className="diff-header reveal reveal-up">
                    <div className="header-badge">
                        <span className="badge-icon">✨</span>
                        <span className="badge-text">{t('differentiators.badge')}</span>
                    </div>
                    <h2 className="diff-main-title">
                        {t('differentiators.title')} <span className="highlight-red">{t('differentiators.brandName')}</span> {t('differentiators.titleEnd')}
                    </h2>
                    <p className="diff-subtitle">
                        {t('differentiators.subtitle')}
                    </p>
                </div>

                {/* Cards con diseño moderno */}
                <div className="diff-grid">
                    <div className="diff-card reveal reveal-up delay-100" data-color="pink">
                        <div className="card-number">01</div>
                        <div className="card-icon-modern">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                        </div>
                        <h3 className="card-title">{t('differentiators.card1.title')}</h3>
                        <p className="card-description" dangerouslySetInnerHTML={{ __html: t('differentiators.card1.description') }} />
                        <div className="card-glow"></div>
                    </div>

                    <div className="diff-card reveal reveal-up delay-200" data-color="orange">
                        <div className="card-number">02</div>
                        <div className="card-icon-modern">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 className="card-title">{t('differentiators.card2.title')}</h3>
                        <p className="card-description" dangerouslySetInnerHTML={{ __html: t('differentiators.card2.description') }} />
                        <div className="card-glow"></div>
                    </div>

                    <div className="diff-card reveal reveal-up delay-300" data-color="red">
                        <div className="card-number">03</div>
                        <div className="card-icon-modern">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                        </div>
                        <h3 className="card-title">{t('differentiators.card3.title')}</h3>
                        <p className="card-description" dangerouslySetInnerHTML={{ __html: t('differentiators.card3.description') }} />
                        <div className="card-glow"></div>
                    </div>
                </div>

                {/* Statement box con diseño hero */}
                <div className="diff-statement-hero reveal reveal-up">
                    <div className="hero-decoration">
                        <div className="floating-shape shape-1"></div>
                        <div className="floating-shape shape-2"></div>
                        <div className="floating-shape shape-3"></div>
                    </div>
                    <p className="statement-text">
                        <strong>{t('differentiators.statement')}</strong>
                    </p>
                </div>

                {/* Comparison con diseño split */}
                <div className="comparison-split reveal reveal-up">
                    <div className="split-header">
                        <h3>{t('differentiators.title2')}</h3>
                    </div>

                    <div className="split-container">
                        <div className="split-side negative">
                            <div className="split-label">
                                <span className="label-icon">❌</span>
                                <span>{t('differentiators.others')}</span>
                            </div>
                            <ul className="split-list">
                                <li>
                                    <span className="list-icon">×</span>
                                    <span>{t('differentiators.comparison1.others')}</span>
                                </li>
                                <li>
                                    <span className="list-icon">×</span>
                                    <span>{t('differentiators.comparison2.others')}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="split-divider">
                            <div className="divider-line"></div>
                            <div className="divider-badge">VS</div>
                        </div>

                        <div className="split-side positive">
                            <div className="split-label">
                                <span className="label-icon">✓</span>
                                <span>Frutia</span>
                            </div>
                            <ul className="split-list">
                                <li>
                                    <span className="list-icon">✓</span>
                                    <span>{t('differentiators.comparison1.frutia')}</span>
                                </li>
                                <li>
                                    <span className="list-icon">✓</span>
                                    <span>{t('differentiators.comparison2.frutia')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final statement con CTA style */}
                <div className="final-cta reveal reveal-up">
                    <div className="cta-content">
                        <p className="final-text">
                            <strong>{t('differentiators.finalStatement.bold')}</strong>
                        </p>
                        <p className="final-subtext" dangerouslySetInnerHTML={{ __html: t('differentiators.finalStatement.subtext') }} />
                    </div>
                    <div className="cta-decoration">
                        <div className="pulse-circle"></div>
                        <div className="pulse-circle delay-1"></div>
                        <div className="pulse-circle delay-2"></div>
                    </div>
                </div>

            </div>

            {/* Elementos decorativos de fondo */}
            <div className="background-elements">
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                <div className="bg-circle circle-3"></div>
            </div>
        </section>
    );
};

export default Differentiators;