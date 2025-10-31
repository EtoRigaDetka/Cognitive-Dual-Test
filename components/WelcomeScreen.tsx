import React from 'react';
import Button from './shared/Button';

interface WelcomeScreenProps {
    onStart: () => void;
    content: {
        title: string;
        subtitle: string;
        description1: string;
        description2: string;
        button: string;
    };
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, content }) => {
    return (
        <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in">
            <h1 className="text-5xl font-bold text-slate-800 mb-3">{content.title}</h1>
            <h2 className="text-2xl text-slate-500 mb-10">{content.subtitle}</h2>
            <div className="max-w-3xl mx-auto text-left space-y-6 mb-12 text-slate-700 text-lg leading-relaxed">
                <p>{content.description1}</p>
                <p>{content.description2}</p>
            </div>
            <Button onClick={onStart}>{content.button}</Button>
        </div>
    );
};

export default WelcomeScreen;