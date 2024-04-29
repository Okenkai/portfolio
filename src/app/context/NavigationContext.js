'use client'
import React, { createContext, useContext, useState } from 'react';

const navigationContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useNavigation = () => useContext(navigationContext);

// Provider pour envelopper les composants enfants avec le contexte
export const NavigationProvider = ({ children }) => {
    const [route, setRoute] = useState('career');

    const handleNavigation = (route) => {
        setRoute(route);
    };

    return (
        <navigationContext.Provider value={{ route, handleNavigation }}>
            {children}
        </navigationContext.Provider>
    );
};