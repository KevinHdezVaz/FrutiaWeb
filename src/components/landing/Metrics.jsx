import React from 'react';
import '../styles/Metrics.css';

const Metrics = () => {
    return (
        <section className="metrics" id="resultados">
            <div className="container">
                <h2 className="section-title-center white">MÉTRICAS DE CALIDAD</h2>
                <div className="metrics-grid">
                    <div className="metric-card reveal reveal-up delay-100">
                        <div className="metric-value">±4.2%</div>
                        <div className="metric-label">Precisión en Macros</div>
                        <div className="metric-target">Objetivo: ±5%</div>
                    </div>
                    <div className="metric-card reveal reveal-up delay-200">
                        <div className="metric-value">1.8 min</div>
                        <div className="metric-label">Tiempo de Generación</div>
                        <div className="metric-target">Objetivo: &lt;2 min</div>
                    </div>
                    <div className="metric-card reveal reveal-up delay-300">
                        <div className="metric-value">99.95%</div>
                        <div className="metric-label">Disponibilidad</div>
                        <div className="metric-target">Objetivo: 99.9%</div>
                    </div>
                    <div className="metric-card reveal reveal-up delay-400">
                        <div className="metric-value">4.7/5</div>
                        <div className="metric-label">Satisfacción Usuario</div>
                        <div className="metric-target">Objetivo: 4.5/5</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metrics;