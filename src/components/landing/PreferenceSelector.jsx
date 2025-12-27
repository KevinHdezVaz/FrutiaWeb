import React, { useState, useEffect, useRef } from 'react';
import '../styles/PreferenceSelector.css';

const PreferenceSelector = () => {
    const [selectedPreference, setSelectedPreference] = useState('motivador');
    const scrollContainerRef = useRef(null);
    const autoScrollInterval = useRef(null);


    // Configuración de cada personalidad
    const preferences = {
        motivador: {
            name: 'Motivador',
            description: 'Te impulsa cuando cuesta.',
            mascotLarge: '/images/frutia_motivador-sinfondo.png',
            mascotCard: '/images/frutia_motivador.jpeg',
        },
        directo: {
            name: 'Directo',
            description: 'Va al punto, sin rodeos',
            mascotLarge: '/images/frutia_directa-sinfondo.png',
            mascotCard: '/images/frutia_directa.jpeg',
        },
        cercano: {
            name: 'Cercano',
            description: 'Te acompaña y te entiende',
            mascotLarge: '/images/frutia_cercana-sinfondo.png',
            mascotCard: '/images/frutia_cercana.jpeg',
        },
        meAdapto: {
            name: 'Me Adapto bueno',
            description: 'Se ajusta según tu momento',
            mascotLarge: '/images/frutia_meadapto-sinfondo.png',
            mascotCard: '/images/frutia_meadapto.jpeg',
        },
        frutia2: {
            name: 'Me Adapto',
            description: 'Se ajusta según tu momento',
            mascotLarge: '/images/frutia2-sinfondo.png',
            mascotCard: '/images/frutia2.jpeg',
        },
        frutia3: {
            name: 'Me Adapto',
            description: 'Se ajusta según tu momento',
            mascotLarge: '/images/frutia3-sinfondo.png',
            mascotCard: '/images/frutia3.jpeg',
        },
        frutia4: {
            name: 'Me Adapto',
            description: 'Se ajusta según tu momento',
            mascotLarge: '/images/frutia4-sinfondo.png',
            mascotCard: '/images/frutia4.jpeg',
        },
        frutia5: {
            name: 'Me Adapto',
            description: 'Se ajusta según tu momento',
            mascotLarge: '/images/frutia5-sinfondo.png',
            mascotCard: '/images/frutia5.jpeg',
        },
    };

    const preferencesArray = Object.keys(preferences);
    const currentPref = preferences[selectedPreference];


    // Detener auto-scroll cuando el usuario interactúa
    const handleUserInteraction = (key) => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }
        setSelectedPreference(key);
    };

    // Navegación con flechas
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -312, // width + gap
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 312, // width + gap
                behavior: 'smooth'
            });
        }
    };

    // Navegar a anterior/siguiente
    const goToPrevious = () => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }
        const currentIndex = preferencesArray.indexOf(selectedPreference);
        const prevIndex = currentIndex === 0 ? preferencesArray.length - 1 : currentIndex - 1;
        setSelectedPreference(preferencesArray[prevIndex]);
        scrollLeft();
    };

    const goToNext = () => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }
        const currentIndex = preferencesArray.indexOf(selectedPreference);
        const nextIndex = (currentIndex + 1) % preferencesArray.length;
        setSelectedPreference(preferencesArray[nextIndex]);
        scrollRight();
    };

    return (
        <section className="preferences">
            <div className="container-wide">
                <div className="pref-header">
                    <div className="pref-text">
                        <h2 className="pref-main-title">Elige cómo quieres que Frutia te acompañe</h2>
                        <p className="pref-description">
                            No cambia el plan.<br />
                            Cambia la forma en que Frutia te habla y te guía.
                        </p>
                    </div>

                    {/* Mascota grande - Cambia según selección con animación */}
                    <div className="mascot-large">
                        <img
                            key={selectedPreference}
                            src={currentPref.mascotLarge}
                            alt={`Frutia ${currentPref.name}`}
                            className="mascot-img"
                        />
                    </div>
                </div>

                <p className="pref-change-text">Puedes cambiarlo cuando quieras.</p>

                {/* Cards de preferencias - Scroll horizontal con flechas */}
                <div className="pref-cards-wrapper">
                    {/* Flecha izquierda */}
                    <button
                        className="scroll-arrow scroll-arrow-left"
                        onClick={goToPrevious}
                        aria-label="Anterior"
                    >
                        ‹
                    </button>

                    <div className="pref-cards-container" ref={scrollContainerRef}>
                        <div className="pref-cards-horizontal">
                            {Object.keys(preferences).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => handleUserInteraction(key)}
                                    className={`pref-card-new ${selectedPreference === key ? 'selected' : ''}`}
                                >
                                    <div className="pref-card-img">
                                        <img src={preferences[key].mascotCard} alt={preferences[key].name} />
                                    </div>
                                    <h4 className="pref-card-title">{preferences[key].name}</h4>
                                    <p className="pref-card-desc">
                                        {key === 'cercano' ? (
                                            <span className="pink-text">{preferences[key].description}</span>
                                        ) : (
                                            preferences[key].description
                                        )}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Flecha derecha */}
                    <button
                        className="scroll-arrow scroll-arrow-right"
                        onClick={goToNext}
                        aria-label="Siguiente"
                    >
                        ›
                    </button>
                </div>

                {/* Dots indicadores - dinámicos */}
                <div className="pref-dots">
                    {Object.keys(preferences).map((key) => (
                        <span
                            key={key}
                            className={`dot ${selectedPreference === key ? 'active' : ''}`}
                            onClick={() => handleUserInteraction(key)}
                        ></span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PreferenceSelector;


