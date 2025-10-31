import React, { useState, useEffect } from 'react';
import { QuizAnswer, Language } from '../types';
import { IMAGES, QUIZ_DATA } from '../constants';
import Button from './shared/Button';
import Quiz from './Quiz';

type MemoryPhase = 'instruction' | 'image' | 'quiz';

interface MemoryTestProps {
    onComplete: (result: QuizAnswer[]) => void;
    content: {
        title: string;
        subtitle: string;
        instructionText: string;
        imageInstruction: string;
        timerLabel: string;
        questionProgress: string;
        of: string;
        confidenceQuestion: string;
        confidenceOptions: string[];
    };
    commonContent: any;
    language: Language;
}

const ImageDisplay: React.FC<{ imageUrl: string, duration: number, onTimeUp: () => void, content: any, language: Language }> = ({ imageUrl, duration, onTimeUp, content, language }) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!isRevealed || timeLeft <= 0) {
            if (timeLeft <= 0) onTimeUp();
            return;
        }
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, isRevealed, onTimeUp]);

    const handleReveal = () => {
        setIsRevealed(true);
    };

    return (
        <div className="flex flex-col items-center animate-fade-in w-full">
             <p className="text-lg text-slate-600 mb-4">{isRevealed ? content.imageInstruction : (language === 'lv' ? 'Noklikšķiniet uz attēla, lai sāktu' : 'Нажмите на изображение, чтобы начать')}</p>
            <div 
                className="relative w-full max-w-4xl h-[600px] bg-slate-100 rounded-lg shadow-inner mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={!isRevealed ? handleReveal : undefined}
            >
                <img 
                    src={imageUrl} 
                    alt="Test stimulus" 
                    className={`max-w-full max-h-full object-contain transition-all duration-500 ${isRevealed ? 'blur-none' : 'blur-2xl'}`} 
                />
                {!isRevealed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                        <div className="text-white text-2xl font-bold p-4 bg-black bg-opacity-50 rounded-lg">
                            {language === 'lv' ? 'Sākt skatīšanos' : 'Начать просмотр'}
                        </div>
                    </div>
                )}
            </div>
            {isRevealed && (
                <div className="text-2xl font-semibold p-3 bg-slate-200 rounded-md animate-fade-in">
                    {content.timerLabel} <span className="font-mono text-3xl">{timeLeft}s</span>
                </div>
            )}
        </div>
    );
};

const MemoryTest: React.FC<MemoryTestProps> = ({ onComplete, content, commonContent, language }) => {
    const [phase, setPhase] = useState<MemoryPhase>('instruction');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [allQuizAnswers, setAllQuizAnswers] = useState<QuizAnswer[]>([]);

    const handleStartImageDisplay = () => {
        setPhase('image');
    };

    const handleTimeUp = () => {
        setPhase('quiz');
    };

    const handleQuizComplete = (answers: QuizAnswer[]) => {
        const newAnswers = [...allQuizAnswers, ...answers];
        setAllQuizAnswers(newAnswers);

        if (currentImageIndex < IMAGES.length - 1) {
            setCurrentImageIndex(prev => prev + 1);
            setPhase('instruction');
        } else {
            onComplete(newAnswers);
        }
    };

    const renderContent = () => {
        switch (phase) {
            case 'instruction':
                return (
                    <div className="text-center p-10 bg-white rounded-lg shadow-xl animate-fade-in">
                        <p className="text-slate-500 mb-8 text-lg">({language === 'lv' ? 'Attēls' : 'Изображение'} {currentImageIndex + 1}/{IMAGES.length})</p>
                        <p className="text-lg mb-10 max-w-2xl mx-auto text-slate-700 leading-relaxed">{content.instructionText}</p>
                        <Button onClick={handleStartImageDisplay}>{commonContent.readyButton}</Button>
                    </div>
                );
            case 'image':
                return <ImageDisplay imageUrl={IMAGES[currentImageIndex].url} duration={30} onTimeUp={handleTimeUp} content={content} language={language} />;
            case 'quiz':
                return <Quiz imageIndex={currentImageIndex} onQuizComplete={handleQuizComplete} content={content} commonContent={commonContent} language={language} />;
        }
    };
    
    return <div>{renderContent()}</div>;
};


export default MemoryTest;