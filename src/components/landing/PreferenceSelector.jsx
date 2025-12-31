import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PreferenceSelector.css';

const PreferenceSelector = () => {
    const { t } = useTranslation();
    const [selectedPreference, setSelectedPreference] = useState('motivador');

    const preferences = {
        motivador: {
            name: t('preferences.motivador.name'),
            description: t('preferences.motivador.description'),
            color: '#FF4D4D',
            image: '/images/frutia_motivador.jpeg',
            auraBackground: '/images/frutia_fondo2.png',
        },
        directo: {
            name: t('preferences.directo.name'),
            description: t('preferences.directo.description'),
            color: '#bdb9bdff',
            image: '/images/frutia_directa.jpeg',
            auraBackground: '/images/frutia_fondo4.png',
        },
        cercano: {
            name: t('preferences.cercano.name'),
            description: t('preferences.cercano.description'),
            color: '#FF6B9D',
            image: '/images/frutia_cercana.jpeg',
            auraBackground: '/images/frutia_fondo1.png',
        },
        meAdapto: {
            name: t('preferences.meAdapto.name'),
            description: t('preferences.meAdapto.description'),
            color: '#4c9eafff',
            image: '/images/frutia_meadapto.jpeg',
            auraBackground: '/images/frutia_fondo3.png',
        },
    };

    const currentPref = preferences[selectedPreference];

    // Precarga de imágenes
    useEffect(() => {
        Object.values(preferences).forEach((pref) => {
            const imgFresa = new Image();
            imgFresa.src = pref.image;

            const imgAura = new Image();
            imgAura.src = pref.auraBackground;
        });
    }, []);

    return (
        <section
            className="preferences-section"
            style={{
                backgroundImage: `url(${currentPref.auraBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // backgroundBlendMode: 'multiply',  // comentado para que se vea más "normal"
                transition: 'background-image 0.8s ease-out',
            }}
        >
            <div className="container">
                <div className="two-column-layout">
                    {/* Columna izquierda - Mascota con card */}
                    <div className="image-column reveal reveal-left">
                        <div className="mascot-card">
                            <img
                                key={selectedPreference}
                                src={currentPref.image}
                                alt={`${currentPref.name} - Frutia`}
                                className="main-mascot"
                            />
                        </div>
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
                                        onClick={() => setSelectedPreference(key)}
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