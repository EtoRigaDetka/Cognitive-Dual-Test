import React, { useState, useEffect, useCallback, useRef } from 'react';
import { DigitSpanTrial, DigitSpanResult } from '../types';
import Button from './shared/Button';

type TestPhase = 'instruction' | 'getReady' | 'delay' | 'displaying' | 'input' | 'feedback';

interface DigitSpanTestProps {
    mode: 'forward' | 'backward';
    onComplete: (result: DigitSpanResult) => void;
    content: {
        title: string;
        subtitle: string;
        instruction: string;
        currentLength: string;
    };
    commonContent: {
        readyButton: string;
        submitButton: string;
        nextButton: string;
        correct: string;
        incorrect: string;
        tryAgain: string;
        beReady: string;
    };
}

const DigitSpanTest: React.FC<DigitSpanTestProps> = ({ mode, onComplete, content, commonContent }) => {
    const [phase, setPhase] = useState<TestPhase>('instruction');
    const [sequence, setSequence] = useState<number[]>([]);
    const [currentDigitIndex, setCurrentDigitIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [currentLength, setCurrentLength] = useState(3);
    const [mistakesAtLength, setMistakesAtLength] = useState(0);
    const [trials, setTrials] = useState<DigitSpanTrial[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    
    const inputRef = useRef<HTMLInputElement>(null);

    const generateSequence = (length: number) => {
        const newSequence: number[] = [];
        while (newSequence.length < length) {
            const digit = Math.floor(Math.random() * 10);
            if (newSequence.length > 0 && newSequence[newSequence.length - 1] === digit) {
                continue;
            }
            newSequence.push(digit);
        }
        return newSequence;
    };
    
    const startTrial = useCallback(() => {
        const newSeq = generateSequence(currentLength);
        setSequence(newSeq);
        setUserInput('');
        setCurrentDigitIndex(0);
        setPhase('getReady');
    }, [currentLength]);

    useEffect(() => {
        if (phase === 'getReady') {
            const timer = setTimeout(() => {
                setPhase('delay');
            }, 3000); // 3 second duration for "BE READY"
            return () => clearTimeout(timer);
        }

        if (phase === 'delay') {
            const timer = setTimeout(() => {
                setPhase('displaying');
            }, 1000); // 1 second delay
            return () => clearTimeout(timer);
        }

        if (phase === 'displaying' && currentDigitIndex < sequence.length) {
            const timer = setTimeout(() => {
                setCurrentDigitIndex(prev => prev + 1);
            }, 1000); // 1 sec display
            return () => clearTimeout(timer);
        } else if (phase === 'displaying' && currentDigitIndex >= sequence.length) {
            const timer = setTimeout(() => {
                setPhase('input');
            }, 500); // 0.5 sec pause after sequence
            return () => clearTimeout(timer);
        }
    }, [phase, currentDigitIndex, sequence.length]);
    
    useEffect(() => {
        if (phase === 'input' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [phase]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const expectedAnswer = mode === 'forward' ? sequence.join('') : [...sequence].reverse().join('');
        const correct = userInput === expectedAnswer;

        setTrials(prev => [...prev, { length: currentLength, sequence, response: userInput, correct }]);
        setIsCorrect(correct);
        setPhase('feedback');
        
        if (correct) {
            setMistakesAtLength(0);
            setCurrentLength(prev => prev + 1);
        } else {
            if (mistakesAtLength === 1) {
                const maxLength = trials.filter(t => t.correct).reduce((max, t) => Math.max(max, t.length), 0);
                onComplete({ maxLength, trials: [...trials, { length: currentLength, sequence, response: userInput, correct: false }] });
            } else {
                setMistakesAtLength(1);
            }
        }
    };

    const handleNext = () => {
        startTrial();
    }
    
    const renderContent = () => {
        switch (phase) {
            case 'instruction':
                return (
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">{content.title}</h2>
                        <h3 className="text-lg md:text-xl text-slate-500 mb-8">{content.subtitle}</h3>
                        <p className="mb-10 text-base md:text-lg text-slate-600 leading-relaxed bg-slate-100 p-6 rounded-lg">{content.instruction}</p>
                        <Button onClick={() => startTrial()}>{commonContent.readyButton}</Button>
                    </div>
                );
            case 'getReady':
                 return (
                    <div className="text-5xl font-bold text-slate-700 h-64 w-64 flex items-center justify-center bg-slate-100 rounded-lg shadow-inner animate-blinking-accelerate">
                        {commonContent.beReady}
                    </div>
                );
            case 'delay':
                return (
                    <div className="h-64 w-64 flex items-center justify-center">
                        {/* Empty container to maintain layout during the delay */}
                    </div>
                );
            case 'displaying':
                return (
                    <div className="text-9xl font-mono font-bold text-blue-600 h-64 w-64 flex items-center justify-center bg-slate-100 rounded-lg shadow-inner">
                        {currentDigitIndex < sequence.length && 
                          <span className="animate-fade-in-out">{sequence[currentDigitIndex]}</span>}
                    </div>
                );
            case 'input':
                return (
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input
                            ref={inputRef}
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value.replace(/\D/g, ''))}
                            className="bg-white text-slate-900 text-4xl text-center w-full max-w-sm p-4 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            pattern="[0-9]*"
                        />
                        <Button type="submit" className="mt-6">{commonContent.submitButton}</Button>
                    </form>
                );
            case 'feedback':
                return (
                    <div className="text-center">
                        <p className={`text-4xl font-bold mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {isCorrect ? commonContent.correct : commonContent.incorrect}
                        </p>
                        {!isCorrect && mistakesAtLength === 1 && <p className="text-lg text-slate-500 mb-6">{commonContent.tryAgain}</p>}
                        <Button onClick={handleNext}>{commonContent.nextButton}</Button>
                    </div>
                );
        }
    };

    return (
        <div className="bg-white p-12 rounded-lg shadow-lg w-full animate-fade-in">
            <div className="text-center text-slate-500 mb-8 h-6">
                {phase !== 'instruction' ? (
                    <p className="animate-fade-in">{content.currentLength} {currentLength}</p>
                 ) : (
                    <p>&nbsp;</p> // Placeholder to prevent layout shift
                 )}
            </div>
            <div className="min-h-[250px] flex items-center justify-center">
                {renderContent()}
            </div>
        </div>
    );
};

export default DigitSpanTest;