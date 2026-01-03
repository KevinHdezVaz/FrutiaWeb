import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Componente del cubo con texturas
const MascotCube = ({ images, currentView }) => {
    const meshRef = useRef();
    const [currentRotation, setCurrentRotation] = useState(0);

    // Mapeo directo de vista a rotación
    const rotationMap = {
        0: 0,                // Frente
        1: -Math.PI / 2,     // Perfil
        2: -Math.PI          // Atrás
    };

    // Actualizar rotación objetivo cuando cambia la vista
    useEffect(() => {
        console.log('Vista cambiada a:', currentView, 'Rotación objetivo:', rotationMap[currentView]);
        setCurrentRotation(rotationMap[currentView]);
    }, [currentView]);

    // Cargar texturas
    const textures = useTexture(
        [images.front, images.profile, images.back],
        (loadedTextures) => {
            console.log('Texturas cargadas correctamente');
        },
        undefined,
        (error) => {
            console.error('Error al cargar texturas:', error);
        }
    );

    const [frontTexture, profileTexture, backTexture] = Array.isArray(textures) ? textures : [textures, textures, textures];

    // Animar rotación suavemente
    useFrame(() => {
        if (meshRef.current) {
            const diff = currentRotation - meshRef.current.rotation.y;
            meshRef.current.rotation.y += diff * 0.1;
        }
    });

    // Configurar texturas
    useEffect(() => {
        [frontTexture, profileTexture, backTexture].forEach(texture => {
            if (texture) {
                texture.colorSpace = THREE.SRGBColorSpace;
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.needsUpdate = true;
            }
        });
    }, [frontTexture, profileTexture, backTexture]);

    const materials = [
        new THREE.MeshBasicMaterial({
            map: profileTexture,
            toneMapped: false,
            transparent: true
        }),
        new THREE.MeshBasicMaterial({
            map: profileTexture,
            toneMapped: false,
            transparent: true
        }),
        new THREE.MeshBasicMaterial({
            color: '#1a1a2e',
            toneMapped: false,
            transparent: true,
            opacity: 0
        }),
        new THREE.MeshBasicMaterial({
            color: '#1a1a2e',
            toneMapped: false,
            transparent: true,
            opacity: 0
        }),
        new THREE.MeshBasicMaterial({
            map: frontTexture,
            toneMapped: false,
            transparent: true
        }),
        new THREE.MeshBasicMaterial({
            map: backTexture,
            toneMapped: false,
            transparent: true
        }),
    ];

    return (
        <mesh ref={meshRef} rotation={[0, 0, 0]} material={materials}>
            <boxGeometry args={[3.2, 3.2, 3.2]} />
        </mesh>
    );
};

// Loading fallback
const LoadingFallback = () => (
    <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="#FF4D4D" wireframe />
    </mesh>
);

// Componente principal
const Mascot3DViewer = ({ currentPref, selectedView, onViewChange }) => {
    const orbitRef = useRef();

    useEffect(() => {
        if (orbitRef.current) {
            const controls = orbitRef.current;

            const handleChange = () => {
                const azimuth = controls.getAzimuthalAngle();
                const normalizedAngle = ((azimuth % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

                if (normalizedAngle < Math.PI / 4 || normalizedAngle >= 7 * Math.PI / 4) {
                    onViewChange && onViewChange(0); // Frente
                } else if (normalizedAngle >= Math.PI / 4 && normalizedAngle < 3 * Math.PI / 4) {
                    onViewChange && onViewChange(1); // Perfil
                } else if (normalizedAngle >= 3 * Math.PI / 4 && normalizedAngle < 5 * Math.PI / 4) {
                    onViewChange && onViewChange(2); // Atrás
                } else {
                    onViewChange && onViewChange(1); // Perfil
                }
            };

            controls.addEventListener('change', handleChange);
            return () => controls.removeEventListener('change', handleChange);
        }
    }, [onViewChange]);

    // Resetear controles cuando cambia la personalidad
    useEffect(() => {
        if (orbitRef.current) {
            orbitRef.current.reset();
        }
    }, [currentPref]);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative'
        }}>
            <Canvas
                gl={{
                    alpha: true,
                    antialias: true,
                    toneMapping: THREE.NoToneMapping,
                    outputColorSpace: THREE.SRGBColorSpace
                }}
                camera={{ position: [0, 0, 5.5], fov: 50 }}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <ambientLight intensity={1.5} color="#ffffff" />

                <Suspense fallback={<LoadingFallback />}>
                    <MascotCube
                        images={{
                            front: currentPref.views[0].image,
                            profile: currentPref.views[1].image,
                            back: currentPref.views[2].image
                        }}
                        currentView={selectedView}
                    />
                </Suspense>

                <OrbitControls
                    ref={orbitRef}
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    enableRotate={true}
                    rotateSpeed={0.8}
                    enableDamping={true}
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
};

export default Mascot3DViewer; 