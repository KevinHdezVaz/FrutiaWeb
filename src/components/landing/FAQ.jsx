import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/FAQ.css';

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: t('faq.questions.q1.question'),
            answer: t('faq.questions.q1.answer')
        },
        {
            question: t('faq.questions.q2.question'),
            answer: t('faq.questions.q2.answer')
        },
        {
            question: t('faq.questions.q3.question'),
            answer: t('faq.questions.q3.answer')
        },
        {
            question: t('faq.questions.q4.question'),
            answer: t('faq.questions.q4.answer')
        },
        {
            question: t('faq.questions.q5.question'),
            answer: t('faq.questions.q5.answer')
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="soporte">
            <div className="container">
                {/* Header */}
                <div className="faq-header reveal reveal-up">
                    <span className="section-badge">{t('faq.badge')}</span>
                    <h2 className="section-title">
                        {t('faq.title')} <span className="highlight-red">{t('faq.titleHighlight')}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t('faq.subtitle')}
                    </p>
                </div>

                {/* FAQ List */}
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item reveal reveal-up delay-${(index + 1) * 100} ${openIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <div className="faq-icon">
                                    {openIndex === index ? '−' : '+'}
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;