import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Mascot3DViewer from './Mascot3DViewer';
import '../styles/PreferenceSelector.css';

const PreferenceSelector = () => {
    const { t } = useTranslation();
    const [selectedPreference, setSelectedPreference] = useState('motivador');
    const [selectedView, setSelectedView] = useState(0);

    const preferences = {
        motivador: {
            name: t('preferences.motivador.name'),
            description: t('preferences.motivador.description'),
            color: '#FF4D4D',
            gradient: 'linear-gradient(135deg, #FFB3C1 0%, #FFC9D6 50%, #FFE0E8 100%)',
            views: [
                { id: 'front', image: '/images/frutia_motivador.jpeg', label: 'Frente' },
                { id: 'profile', image: '/images/frutia_motivador_perfil.png', label: 'Perfil' },
                { id: 'back', image: '/images/frutia_motivador_back.png', label: 'Atrás' }
            ],
        },
        directo: {
            name: t('preferences.directo.name'),
            description: t('preferences.directo.description'),
            color: '#bdb9bdff',
            gradient: 'linear-gradient(135deg, #E8E6E8 0%, #F0EEF0 50%, #F8F6F8 100%)',
            views: [
                { id: 'front', image: '/images/frutia_directa.jpeg', label: 'Frente' },
                { id: 'profile', image: '/images/frutia_directa_profile.png', label: 'Perfil' },
                { id: 'back', image: '/images/frutia_directa_back2.png', label: 'Atrás' }
            ],
        },
        cercano: {
            name: t('preferences.cercano.name'),
            description: t('preferences.cercano.description'),
            color: '#FF6B9D',
            gradient: 'linear-gradient(135deg, #FFC0D9 0%, #FFD4E6 50%, #FFE8F2 100%)',
            views: [
                { id: 'front', image: '/images/frutia_cercana.jpeg', label: 'Frente' },
                { id: 'profile', image: '/images/frutia_cercana_profile.png', label: 'Perfil' },
                { id: 'back', image: '/images/frutia_cercana_back.png', label: 'Atrás' }
            ],
        },
        meAdapto: {
            name: t('preferences.meAdapto.name'),
            description: t('preferences.meAdapto.description'),
            color: '#4c9eafff',
            gradient: 'linear-gradient(135deg, #B8E0E8 0%, #D0EBF0 50%, #E8F5F8 100%)',
            views: [
                { id: 'front', image: '/images/frutia_meadapto.jpeg', label: 'Frente' },
                { id: 'profile', image: '/images/frutia_meadapto_profile.png', label: 'Perfil' },
                { id: 'back', image: '/images/frutia_meadapto_back.png', label: 'Atrás' }
            ],
        },
    };

    const currentPref = preferences[selectedPreference];

    const handlePreferenceChange = (key) => {
        setSelectedPreference(key);
        setSelectedView(0);
    };

    const handleViewChange = (index) => {
        setSelectedView(index);
    };

    // Precarga de imágenes
    useEffect(() => {
        Object.values(preferences).forEach((pref) => {
            pref.views.forEach((view) => {
                const img = new Image();
                img.src = view.image;
            });
        });
    }, []);

    return (
        <section
            className="preferences-section"
            style={{
                background: currentPref.gradient, // ← CAMBIO: usar gradient en lugar de backgroundImage
                transition: 'background 0.8s ease-out',
            }}
        >
            <div className="container">
                <div className="two-column-layout">
                    {/* Columna izquierda - Modelo 3D */}
                    <div className="image-column reveal reveal-left">
                        <div className="mascot-card-3d">
                            <Mascot3DViewer
                                currentPref={currentPref}
                                selectedView={selectedView}
                                onViewChange={setSelectedView}
                            />
                        </div>

                        {/* Selector de vistas */}
                        <div className="view-selector">
                            {currentPref.views.map((view, index) => (
                                <button
                                    key={view.id}
                                    className={`view-thumbnail ${selectedView === index ? 'active' : ''}`}
                                    onClick={() => handleViewChange(index)}
                                    aria-label={view.label}
                                >
                                    <img
                                        src={view.image}
                                        alt={view.label}
                                        draggable="false"
                                    />
                                    <span className="view-label">{view.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Indicador de interacción */}
                        <div className="rotation-hint">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                            <span>Arrastra para rotar</span>
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