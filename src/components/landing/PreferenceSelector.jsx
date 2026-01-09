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
            color: '#8b1a2f',
            gradient: 'linear-gradient(135deg, #f8eded 0%, #eac8cb 50%, #d6939b 100%)',
            video: '/images/frutia_motivador_new.mp4', // ← Tu video aquí
        },
        directo: {
            name: t('preferences.directo.name'),
            description: t('preferences.directo.description'),
            color: '#bdb9bdff',
            gradient: 'linear-gradient(135deg, #E8E6E8 0%, #F0EEF0 50%, #F8F6F8 100%)',
            video: '/images/frutia_directa_new.mp4',
        },
        cercano: {
            name: t('preferences.cercano.name'),
            description: t('preferences.cercano.description'),
            color: '#5c111d',
            gradient: 'linear-gradient(135deg, #efdfe1 0%, #e1b8c0 50%, #b47a85 100%)',
            video: '/images/frutia_cercana_videoo.mp4',
        },
        meAdapto: {
            name: t('preferences.meAdapto.name'),
            description: t('preferences.meAdapto.description'),
            color: '#4c9eafff',
            gradient: 'linear-gradient(135deg, #B8E0E8 0%, #D0EBF0 50%, #E8F5F8 100%)',
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