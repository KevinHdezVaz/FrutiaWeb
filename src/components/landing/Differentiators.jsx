import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Differentiators.css';

const Differentiators = () => {
    const { t } = useTranslation();

    return (
        <section className="differentiators" id="modelo">
            <div className="diff-container">
                {/* Header */}
                <div className="diff-header reveal reveal-up">
                    <h2 className="diff-main-title">
                        Por que <span className="highlight-red">FRUTIA</span> es diferente
                    </h2>
                    <p className="diff-subtitle">
                        No es un contador de calorías, está pensada para ayudarte a avanzar incluso cuando el plan falla.
                    </p>
                </div>

                {/* Cards con iconos SVG */}
                <div className="diff-grid">
                    <div className="diff-card reveal reveal-up delay-100">
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                        </div>
                        <h3 className="card-title">Criterio</h3>
                        <p className="card-description">
                            Frutia no aplica reglas rígidas.<br />
                            Decide según tu objetivo, tu contexto y tu día.<br />
                            No castiga errores: ajusta el rumbo.
                        </p>
                    </div>

                    <div className="diff-card reveal reveal-up delay-200">
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 className="card-title">Acompañamiento</h3>
                        <p className="card-description">
                            No desaparece después de darte un plan.<br />
                            Está presente cuando dudas, improvisas o necesitas decidir rápido.
                        </p>
                    </div>

                    <div className="diff-card reveal reveal-up delay-300">
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                        </div>
                        <h3 className="card-title">Continuidad</h3>
                        <p className="card-description">
                            No depende de disciplina extrema ni de semanas perfectas.<br />
                            Te ayuda a seguir avanzando incluso cuando un día no sale como esperabas.
                        </p>
                    </div>
                </div>

                {/* Statement box */}
                <div className="diff-statement-box reveal reveal-up">
                    <p className="statement-text">
                        <strong>Frutia no es un app mas</strong>
                    </p>
                </div>

                {/* Comparison */}
                <div className="comparison-grid reveal reveal-up">
                    <div className="comparison-item">
                        <p className="comparison-text">
                            <strong>Otras apps registran.</strong><br />
                            <strong>Frutia interpreta.</strong>
                        </p>
                    </div>
                    <div className="comparison-item">
                        <p className="comparison-text">
                            <strong>Otras te muestran números.</strong><br />
                            <strong>Frutia te dice qué hacer con ellos.</strong>
                        </p>
                    </div>
                </div>

                {/* Final statement */}
                <div className="final-statement reveal reveal-up">
                    <p className="final-text">
                        <strong>Registrar lo que comes no cambia nada.</strong>
                    </p>
                    <p className="final-subtext">
                        Lo que cambia es tener criterio cuando el contexto se desordena.<br />
                        Frutia interviene, orienta y te mantiene en rumbo incluso cuando el día no sale perfecto.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;