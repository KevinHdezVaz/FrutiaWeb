import React from 'react';
import '../styles/Differentiators.css';

const Differentiators = () => {
    return (
        <section className="differentiators" id="modelo">
            <div className="diff-container">
                {/* Header más pequeño */}
                <div className="diff-header">
                    <h2 className="diff-main-title animate-on-load" style={{ '--order': 1 }}>
                        Por qué <span className="highlight-red">Frutia</span> es diferente
                    </h2>
                    <p className="diff-subtitle animate-on-load" style={{ '--order': 2 }}>
                        No es un contador de calorías. Es un sistema que realmente funciona.
                    </p>
                </div>

                {/* Solo 3 cards para no saturar */}
                <div className="diff-grid">
                    <div className="diff-card animate-on-load" style={{ '--order': 3 }}>
                        <div className="card-icon">🌱</div>
                        <h3 className="card-title">Hábitos sostenibles</h3>
                        <p className="card-description">
                            Salud real se construye día a día, no en dietas extremas.
                        </p>
                    </div>

                    <div className="diff-card animate-on-load" style={{ '--order': 4 }}>
                        <div className="card-icon">📈</div>
                        <h3 className="card-title">Resultados visibles</h3>
                        <p className="card-description">
                            Progreso medible en grasa, energía y bienestar.
                        </p>
                    </div>

                    <div className="diff-card animate-on-load" style={{ '--order': 5 }}>
                        <div className="card-icon">🧠</div>
                        <h3 className="card-title">Guía en tiempo real</h3>
                        <p className="card-description">
                            Decisiones inteligentes justo cuando las necesitas.
                        </p>
                    </div>
                </div>

                {/* Statement box más corto y centrado */}
                <div className="diff-statement-box animate-on-load" style={{ '--order': 6 }}>
                    <p className="statement-text">
                        <strong>Registrar comidas no cambia nada.</strong><br />
                        Frutia <span className="text-highlight">interviene, guía y sostiene</span> decisiones reales para resultados que duran.
                    </p>
                </div>

                {/* Features en una sola línea en desktop */}
                <div className="features-list animate-on-load" style={{ '--order': 7 }}>
                    <div className="feature-item">
                        <div className="feature-check">✓</div>
                        <span>Interviene en el momento</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-check">✓</div>
                        <span>Se adapta a tu vida</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-check">✓</div>
                        <span>Resultados duraderos</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;