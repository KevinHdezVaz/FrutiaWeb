import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    // Configuración de imágenes por idioma
    const images = {
        step1: {
            es: '/images/img_crear_plan.png',
            en: '/images/img_crear_plan_ingle.png'
        },
        step2: {
            es: '/images/img_chat_frutia.png',
            en: '/images/img_chat_ingle.png'
        },
        step3: {
            es: '/images/img_racha.png',
            en: '/images/img_racha_ingle.png'
        }
    };

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="section-badge">{t('howItWorks.badge')}</span>
                    <h2 className="section-title">
                        {t('howItWorks.title')} <span className="highlight-red">FRUTIA WORK</span>?
                    </h2>
                    <p className="section-subtitle">
                        {t('howItWorks.subtitle')}
                    </p>
                </div>

                {/* Timeline */}
                <div className="timeline">
                    {/* Paso 1 */}
                    <div className="step">
                        <div className="step-line"></div>
                        <div className="step-dot">
                            <span className="dot-number">1</span>
                        </div>

                        <div className="step-card">
                            <div className="step-content">
                                <div className="step-header">
                                    <h3 className="step-title">{t('howItWorks.step1.title')}</h3>
                                </div>
                                <p className="step-text">
                                    {t('howItWorks.step1.description')}
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">✓ {t('howItWorks.step1.feature1')}</span>
                                    <span className="feature-tag">✓ {t('howItWorks.step1.feature2')}</span>
                                    <span className="feature-tag">✓ {t('howItWorks.step1.feature3')}</span>
                                </div>
                            </div>

                            <div className="step-visual">
                                <div className="mockup-wrapper">
                                    <img
                                        src={images.step1[currentLang]}
                                        alt={t('howItWorks.step1.imageAlt')}
                                        className="iphone-mockup"
                                        loading="lazy"
                                    />
                                    <div className="mockup-glow"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="step reverse">
                        <div className="step-line"></div>
                        <div className="step-dot">
                            <span className="dot-number">2</span>
                        </div>

                        <div className="step-card">
                            <div className="step-content">
                                <div className="step-header">
                                    <h3 className="step-title">{t('howItWorks.step2.title')}</h3>
                                </div>
                                <p className="step-text">
                                    {t('howItWorks.step2.description')}
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">✓ {t('howItWorks.step2.feature1')}</span>
                                    <span className="feature-tag">✓ {t('howItWorks.step2.feature2')}</span>
                                    <span className="feature-tag">✓ {t('howItWorks.step2.feature3')}</span>
                                </div>
                            </div>

                            <div className="step-visual">
                                <div className="mockup-wrapper">
                                    <img
                                        src={images.step2[currentLang]}
                                        alt={t('howItWorks.step2.imageAlt')}
                                        className="iphone-mockup"
                                        loading="lazy"
                                    />
                                    <div className="mockup-glow"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="step">
                        <div className="step-dot">
                            <span className="dot-number">3</span>
                        </div>

                        <div className="step-card">
                            <div className="step-content">
                                <div className="step-header">
                                    <div className="mascot-celebrate">🍓</div>
                                    <h3 className="step-title">{t('howItWorks.step3.title')}</h3>
                                </div>
                                <p className="step-text">
                                    {t('howItWorks.step3.description')}
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">✓ {t('howItWorks.step3.feature1')}</span>
                                    <span className="feature-tag">✓ {t('howItWorks.step3.feature2')}</span>
                                    <span className="feature-tag">✓ {t('howItWorks.step3.feature3')}</span>
                                </div>
                            </div>

                            <div className="step-visual">
                                <div className="mockup-wrapper">
                                    <img
                                        src={images.step3[currentLang]}
                                        alt={t('howItWorks.step3.imageAlt')}
                                        className="iphone-mockup"
                                        loading="lazy"
                                    />
                                    <div className="mockup-glow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks; 