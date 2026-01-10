import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PreferenceSelector.css';

const PreferenceSelector = () => {
    const { t } = useTranslation();
    const [selectedPreference, setSelectedPreference] = useState('motivador');
    const videoRef = useRef(null);

    const preferences = {
        motivador: {
            name: t('preferences.motivador.name'),
            description: t('preferences.motivador.description'),
            color: '#B52A3A',
            gradient: 'linear-gradient(180deg, #B52A3A 0%, #8B1A2F 100%)',
            video: '/images/frutia_motivador_new.mp4',
        },
        directo: {
            name: t('preferences.directo.name'),
            description: t('preferences.directo.description'),
            color: '#C8E6D4',
            gradient: 'linear-gradient(180deg, #C8E6D4 0%, #A0C8B0 100%)',
            video: '/images/frutia_directa_new.mp4',
        },
        cercano: {
            name: t('preferences.cercano.name'),
            description: t('preferences.cercano.description'),
            color: '#FF9A3C',
            gradient: 'linear-gradient(180deg, #FF9A3C 0%, #B85A15 100%)',
            video: '/images/frutia_cercana_videoo.mp4',
        },
        meAdapto: {
            name: t('preferences.meAdapto.name'),
            description: t('preferences.meAdapto.description'),
            color: '#F5E6A8',
            gradient: 'linear-gradient(180deg, #F5E6A8 0%, #C4A860 100%)',
            video: '/images/frutia_meadapto_videoo.mp4',
        },
    };
    const currentPref = preferences[selectedPreference];

    const handlePreferenceChange = (key) => {
        setSelectedPreference(key);
        // Reiniciar video cuando cambia la preferencia
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
        }
    };

    // Reproducir video al cargar
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
        }
    }, [selectedPreference]);

    return (
        <section
            className="preferences-section"
            style={{
                background: currentPref.gradient,
                transition: 'background 0.8s ease-out',
            }}
        >
            <div className="container">
                <div className="two-column-layout">
                    {/* Columna izquierda - Video */}
                    <div className="image-column reveal reveal-left">
                        <div className="mascot-card-video">
                            <video
                                ref={videoRef}
                                className="mascot-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                key={currentPref.video}
                            >
                                <source src={currentPref.video} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>

                        {/* Indicador de video */}

                    </div>

                    {/* Columna derecha */}
                    <div className="info-column reveal reveal-right">
                        <h2 className="section-title">{t('preferences.title')}</h2>

                        <div className="description-card">
                            <p className="personality-name">{currentPref.name}</p>
                            <p className="personality-desc">{currentPref.description}</p>
                        </div>

                        <div className="personality-picker">
                            <p className="picker-label">{t('preferences.selectYourStyle')}</p>
                            <div className="color-dots">
                                {Object.entries(preferences).map(([key, pref]) => (
                                    <button
                                        key={key}
                                        className={`dot ${selectedPreference === key ? 'selected' : ''}`}
                                        style={{ backgroundColor: pref.color }}
                                        onClick={() => handlePreferenceChange(key)}
                                        aria-label={pref.name}
                                        title={pref.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreferenceSelector;