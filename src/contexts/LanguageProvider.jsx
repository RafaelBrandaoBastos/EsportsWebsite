import {createContext, useState} from 'react';
import React from "react";
export const LanguageContext = createContext();


export const LanguageProvider = ({children}) => {
    const [selectedLanguage, setSelectedLanguage] = useState(0);

    return (
        <LanguageContext.Provider value={[selectedLanguage, setSelectedLanguage]}>
            {children}
        </LanguageContext.Provider>
    );
};
