
import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
    currentLang: Language;
    setLang: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, setLang }) => {
    const switchLanguage = (lang: Language) => {
        setLang(lang);
        document.documentElement.lang = lang;
    };
    
    return (
        <div className="flex space-x-1 bg-white p-1 rounded-full shadow border">
            <button
                onClick={() => switchLanguage('lv')}
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${currentLang === 'lv' ? 'bg-blue-500 text-white' : 'bg-transparent text-slate-600 hover:bg-blue-100'}`}
            >
                LV
            </button>
            <button
                onClick={() => switchLanguage('ru')}
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${currentLang === 'ru' ? 'bg-blue-500 text-white' : 'bg-transparent text-slate-600 hover:bg-blue-100'}`}
            >
                RU
            </button>
        </div>
    );
};

export default LanguageSwitcher;
