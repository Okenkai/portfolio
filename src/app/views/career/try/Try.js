import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const CircleContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
    cursor: 'pointer',
});

const CircleSVG = styled('svg')({
    width: '100%',
    height: '100%',
    transform: 'rotate(-90deg)', // Pour commencer l'animation du bas
});

const GradientCircle = () => {
    const [filled, setFilled] = useState(false);

    const handleClick = () => {
        setFilled(true);
    };

    return (
        <CircleContainer onClick={handleClick}>
            <CircleSVG viewBox="0 0 120 120">
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(94,23,163,1)" />
                        <stop offset="100%" stopColor="rgba(255,105,180,1)" />
                    </linearGradient>
                </defs>

                {/* Cercle gris de fond */}
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#ccc"
                    strokeWidth="10"
                />

                {/* Cercle du dégradé animé */}
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="10"
                    strokeDasharray="314"
                    strokeDashoffset={filled ? 0 : 314}
                    style={{
                        transition: 'stroke-dashoffset 10s ease-in-out', // Transition plus lente
                    }}
                />
            </CircleSVG>
        </CircleContainer>
    );
};

export default GradientCircle;
