import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PreferenceSelector.css';

const PreferenceSelector = () => {
    const { t } = useTranslation();
    const [selectedPreference, setSelectedPreference] = useState('motivador');
    const scrollContainerRef = useRef(null);
    const autoScrollInterval = useRef(null);

    // Configuración de cada personalidad
    const preferences = {
        motivador: {
            name: t('preferences.motivador.name'),
            description: t('preferences.motivador.description'),
            mascotLarge: '/images/frutia_motivador-sinfondo.png',
            mascotCard: '/images/frutia_motivador.jpeg',
        },
        directo: {
            name: t('preferences.directo.name'),
            description: t('preferences.directo.description'),
            mascotLarge: '/images/frutia_directa-sinfondo.png',
            mascotCard: '/images/frutia_directa.jpeg',
        },
        cercano: {
            name: t('preferences.cercano.name'),
            description: t('preferences.cercano.description'),
            mascotLarge: '/images/frutia_cercana-sinfondo.png',
            mascotCard: '/images/frutia_cercana.jpeg',
        },
        meAdapto: {
            name: t('preferences.meAdapto.name'),
            description: t('preferences.meAdapto.description'),
            mascotLarge: '/images/frutia_meadapto-sinfondo.png',
            mascotCard: '/images/frutia_meadapto.jpeg',
        },
        frutia2: {
            name: t('preferences.frutia2.name'),
            description: t('preferences.frutia2.description'),
            mascotLarge: '/images/frutia2-sinfondo.png',
            mascotCard: '/images/frutia2.jpeg',
        },
        frutia3: {
            name: t('preferences.frutia3.name'),
            description: t('preferences.frutia3.description'),
            mascotLarge: '/images/frutia3-sinfondo.png',
            mascotCard: '/images/frutia3.jpeg',
        },
        frutia4: {
            name: t('preferences.frutia4.name'),
            description: t('preferences.frutia4.description'),
            mascotLarge: '/images/frutia4-sinfondo.png',
            mascotCard: '/images/frutia4.jpeg',
        },
        frutia5: {
            name: t('preferences.frutia5.name'),
            description: t('preferences.frutia5.description'),
            mascotLarge: '/images/frutia5-sinfondo.png',
            mascotCard: '/images/frutia5.jpeg',
        },
    };

    const preferencesArray = Object.keys(preferences);
    const currentPref = preferences[selectedPreference];

    const handleUserInteraction = (key) => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }
        setSelectedPreference(key);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -312,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 312,
                behavior: 'smooth'
            });
        }
    };

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
                        <h2 className="pref-main-title">{t('preferences.title')}</h2>
                        <p className="pref-description">
                            {t('preferences.subtitle')}
                        </p>
                    </div>

                    <div className="mascot-large">
                        <img
                            key={selectedPreference}
                            src={currentPref.mascotLarge}
                            alt={`Frutia ${currentPref.name}`}
                            className="mascot-img"
                        />
                    </div>
                </div>

                <p className="pref-change-text">{t('preferences.changeText')}</p>

                <div className="pref-cards-wrapper">
                    <button
                        className="scroll-arrow scroll-arrow-left"
                        onClick={goToPrevious}
                        aria-label={t('preferences.previous')}
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
                                        <span className={key === 'cercano' ? 'pink-text' : ''}>
                                            {preferences[key].description}
                                        </span>
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        className="scroll-arrow scroll-arrow-right"
                        onClick={goToNext}
                        aria-label={t('preferences.next')}
                    >
                        ›
                    </button>
                </div>

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