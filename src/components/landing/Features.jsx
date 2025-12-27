import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import '../styles/Features.css';

const Features = () => {
    const features = [
        {
            icon: "🎯",
            title: "Macros exactos por objetivo",
            description: "Corta, mantén o sube: Frutia calcula calorías y macros y los ajusta con tu progreso."
        },
        {
            icon: "🍽️",
            title: "Plan por opciones",
            description: "Elige 1 opción por grupo para armar tu comida. Más flexible y más fácil de cumplir."
        },
        {
            icon: "🔄",
            title: "Si te sales del plan, te reacomoda el día",
            description: "Comiste algo fuera: Frutia te da opciones para compensar sin caer en 'todo o nada'."
        },
        {
            icon: "💬",
            title: "Chat con IA (texto y voz)",
            description: "Preguntas, dudas, reemplazos, porciones, recetas. Tu asistente siempre disponible."
        },
        {
            icon: "📊",
            title: "Seguimiento visual",
            description: "Resumen del día por macros, historial y exportación a PDF."
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="container">
                {/* Header */}
                <div className="features-header">
                    <span className="section-badge">CARACTERÍSTICAS</span>
                    <h2 className="section-title">
                        Todo lo que necesitas en <span className="highlight-red">una sola app</span>
                    </h2>
                    <p className="section-subtitle">
                        Funcionalidades diseñadas para que logres tus objetivos de forma sostenible
                    </p>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Download Section con react-icons */}
                <div className="download-section">
                    <h3 className="download-title">Disponible en</h3>
                    <div className="download-badges">
                        <a
                            href="https://apps.apple.com/" // ← pon tu link real de la app
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link apple"
                        >
                            <FaApple className="store-icon" />
                            <div className="store-text">
                                <span className="store-subtitle">Descargar en</span>
                                <span className="store-main">App Store</span>
                            </div>
                        </a>

                        <a
                            href="https://play.google.com/store/apps" // ← pon tu link real
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link google"
                        >
                            <FaGooglePlay className="store-icon" />
                            <div className="store-text">
                                <span className="store-subtitle">Obtener en</span>
                                <span className="store-main">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;