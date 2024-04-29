'use client'
import React, { createContext, useContext, useState } from 'react';

const stepContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useStep = () => useContext(stepContext);

// Provider pour envelopper les composants enfants avec le contexte
export const StepProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleStepBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepReset = () => {
        setActiveStep(0);
    };

    return (
        <stepContext.Provider value={{ activeStep, handleStepNext, handleStepBack, handleStepReset }}>
            {children}
        </stepContext.Provider>
    );
};