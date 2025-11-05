import React, { useState, useEffect, useCallback, useRef } from 'react';
import { DigitSpanTrial, DigitSpanResult } from '../types';
import Button from './shared/Button';

type TestPhase = 'instruction' | 'getReady' | 'delay' | 'displaying' | 'input' | 'feedback';

// Predefined sequences
const forwardSequences = [
    [5, 8, 2],
    [6, 4, 3, 9],
    [4, 2, 7, 3, 1],
    [6, 1, 9, 4, 7, 3],
    [5, 9, 1, 7, 4, 2, 8],
    [5, 8, 1, 9, 2, 6, 4, 7],
    [2, 7, 5, 3, 6, 2, 5, 8, 4]
];

const backwardSequences = [
    [2, 4],
    [6, 2, 9],
    [3, 2, 7, 9],
    [1, 5, 2, 8, 6],
    [8, 1, 2, 9, 3, 9, 5],
    [9, 4, 3, 7, 6, 2, 5, 8]
];


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
    const [trialIndex, setTrialIndex] = useState(0);
    const [consecutiveMistakes, setConsecutiveMistakes] = useState(0);
    const [trials, setTrials] = useState<DigitSpanTrial[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isTestComplete, setIsTestComplete] = useState(false);
    
    const inputRef = useRef<HTMLInputElement>(null);
    const sequences = mode === 'forward' ? forwardSequences : backwardSequences;
    
    const startTrial = useCallback((index: number) => {
        if (index >= sequences.length) {
            setIsTestComplete(true);
            return;
        }
        const newSeq = sequences[index];
        setSequence(newSeq);
        setUserInput('');
        setCurrentDigitIndex(0);
        setPhase('getReady');
    }, [sequences]);

    useEffect(() => {
        if (isTestComplete || phase === 'instruction') return;

        if (phase === 'getReady') {
            const timer = setTimeout(() => setPhase('delay'), 3000);
            return () => clearTimeout(timer);
        }
        if (phase === 'delay') {
            const timer = setTimeout(() => setPhase('displaying'), 1000);
            return () => clearTimeout(timer);
        }
        if (phase === 'displaying' && currentDigitIndex < sequence.length) {
            const timer = setTimeout(() => setCurrentDigitIndex(prev => prev + 1), 1000);
            return () => clearTimeout(timer);
        }
        if (phase === 'displaying' && currentDigitIndex >= sequence.length) {
            const timer = setTimeout(() => setPhase('input'), 500);
            return () => clearTimeout(timer);
        }
    }, [phase, currentDigitIndex, sequence.length, isTestComplete]);
    
    useEffect(() => {
        if (phase === 'input' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [phase]);

    const completeTest = useCallback((finalTrials: DigitSpanTrial[]) => {
        const maxLength = finalTrials.filter(t => t.correct).reduce((max, t) => Math.max(max, t.length), 0);
        onComplete({ maxLength, trials: finalTrials });
        setIsTestComplete(true);
    }, [onComplete]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const currentSequence = sequences[trialIndex];
        const expectedAnswer = mode === 'forward' ? currentSequence.join('') : [...currentSequence].reverse().join('');
        const correct = userInput === expectedAnswer;

        const newTrial: DigitSpanTrial = { length: currentSequence.length, sequence: currentSequence, response: userInput, correct };
        const updatedTrials = [...trials, newTrial];
        setTrials(updatedTrials);
        setIsCorrect(correct);
        
        if (correct) {
            setConsecutiveMistakes(0);
            if (trialIndex + 1 >= sequences.length) {
                completeTest(updatedTrials);
            }
        } else {
            const newMistakeCount = consecutiveMistakes + 1;
            setConsecutiveMistakes(newMistakeCount);
            if (newMistakeCount >= 2) {
                completeTest(updatedTrials);
            }
        }
        
        setPhase('feedback');
    };

    const handleNext = () => {
        if (isTestComplete) return;

        if (isCorrect) {
            const nextTrialIndex = trialIndex + 1;
            setTrialIndex(nextTrialIndex);
            startTrial(nextTrialIndex);
        } else {
            // It was an incorrect answer, but not the second one, so retry the same trial.
            startTrial(trialIndex);
        }
    };

    const handleStartFirstTrial = () => {
        setTrialIndex(0);
        setConsecutiveMistakes(0);
        setTrials([]);
        startTrial(0);
    }
    
    const renderContent = () => {
        switch (phase) {
            case 'instruction':
                return (
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">{content.title}</h2>
                        <h3 className="text-lg md:text-xl text-slate-500 mb-8">{content.subtitle}</h3>
                        <p className="mb-10 text-base md:text-lg text-slate-600 leading-relaxed bg-slate-100 p-6 rounded-lg">{content.instruction}</p>
                        <Button onClick={handleStartFirstTrial}>{commonContent.readyButton}</Button>
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
                        {!isCorrect && consecutiveMistakes < 2 && !isTestComplete && <p className="text-slate-500 mb-4">{commonContent.tryAgain}</p>}
                        {!isTestComplete && <Button onClick={handleNext}>{commonContent.nextButton}</Button>}
                    </div>
                );
        }
    };

    const currentSequenceForDisplay = sequences[trialIndex];

    return (
        <div className="bg-white p-12 rounded-lg shadow-lg w-full animate-fade-in">
            <div className="text-center text-slate-500 mb-8 h-6">
                {phase !== 'instruction' && currentSequenceForDisplay ? (
                    <p className="animate-fade-in">{content.currentLength} {currentSequenceForDisplay.length}</p>
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