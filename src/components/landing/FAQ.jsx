import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Frutia reemplaza a un nutricionista?",
            answer: "Frutia está diseñada para acompañarte día a día con planificación, seguimiento y educación nutricional. Para condiciones médicas específicas y/o cambios físicos (subir de masa muscular o bajar grasa corporal) lo ideal es complementarlo con el seguimiento constante."
        },
        {
            question: "¿Qué pasa si no tengo ciertos alimentos?",
            answer: "Puedes trabajar con opciones y reemplazos. La idea es adaptarse a lo que tengas disponible."
        },
        {
            question: "¿Puedo usarlo si tengo restricciones (sin lactosa, etc.)?",
            answer: "Sí. La app puede adaptar opciones y sugerencias según tus preferencias/restricciones."
        },
        {
            question: "¿Cómo maneja Frutia cuando 'me salgo' del plan?",
            answer: "Te propone ajustes realistas para el resto del día (sin castigos), para mantener el progreso."
        },
        {
            question: "¿Puedo exportar mi plan?",
            answer: "Sí: historial y descarga en PDF (ideal para coaches o para tu control)."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="soporte">
            <div className="container">
                {/* Header */}
                <div className="faq-header">
                    <span className="section-badge">SOPORTE</span>
                    <h2 className="section-title">
                        Preguntas <span className="highlight-red">frecuentes</span>
                    </h2>
                    <p className="section-subtitle">
                        Resolvemos tus dudas más comunes sobre Frutia
                    </p>
                </div>

                {/* FAQ List */}
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
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