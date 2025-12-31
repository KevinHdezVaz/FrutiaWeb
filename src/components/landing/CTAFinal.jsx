import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CTAFinal.css';

const CTAFinal = () => {
    const { t } = useTranslation();

    return (
        <section className="cta-final">
            <div className="container reveal reveal-up">
                <h2 className="cta-title">{t('ctaFinal.title')}</h2>
                <p className="cta-text">
                    {t('ctaFinal.text')}
                </p>
                <button className="cta-button">{t('ctaFinal.button')}</button>
                <p className="cta-note">{t('ctaFinal.note')}</p>
            </div>
        </section>
    );
};

export default CTAFinal;