import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="section-badge">PROCESO</span>
                    <h2 className="section-title">
                        ¿Cómo funciona <span className="highlight-red">Frutia</span>?
                    </h2>
                    <p className="section-subtitle">
                        Tres pasos simples para transformar tu relación con la comida
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
                                    <div className="step-icon">🎯</div>
                                    <h3 className="step-title">Definimos tu rumbo</h3>
                                </div>
                                <p className="step-text">
                                    Respondes unas pocas preguntas sobre ti, tu objetivo y tu contexto.
                                    En segundos Frutia conoce tu punto de partida real.
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">✓ Análisis personalizado</span>
                                    <span className="feature-tag">✓ Objetivos claros</span>
                                    <span className="feature-tag">✓ Plan a tu medida</span>
                                </div>
                            </div>

                            <div className="step-visual">
                                <div className="mockup-wrapper">
                                    <img
                                        src="/images/img_crear_plan.png"
                                        alt="Selección de objetivo"
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
                                    <div className="step-icon">🤝</div>
                                    <h3 className="step-title">Te acompañamos cada día</h3>
                                </div>
                                <p className="step-text">
                                    Tu coach personal en el bolsillo: te guía en tiempo real,
                                    ajusta el plan si la vida cambia y celebra cada paso.
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">✓ Chat 24/7</span>
                                    <span className="feature-tag">✓ Ajustes automáticos</span>
                                    <span className="feature-tag">✓ Recordatorios</span>
                                </div>
                            </div>

                            <div className="step-visual">
                                <div className="mockup-wrapper">
                                    <img
                                        src="/images/img_chat_frutia.png"
                                        alt="Selección de objetivo"
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

                                    <h3 className="step-title">Sostienes el proceso</h3>
                                </div>
                                <p className="step-text">
                                    Ves tu progreso semanal, rachas y ajustes automáticos.
                                    Constancia sin esfuerzo.
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">✓ Seguimiento visual</span>
                                    <span className="feature-tag">✓ Rachas motivantes</span>
                                    <span className="feature-tag">✓ Celebraciones</span>
                                </div>
                            </div>

                            <div className="step-visual">

                                <div className="mockup-wrapper">
                                    <img
                                        src="/images/img_racha.png"
                                        alt="Selección de objetivo"
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