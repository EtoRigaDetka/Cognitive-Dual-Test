import React, { useState, useEffect, useCallback, useRef } from 'react';
import { DigitSpanTrial, DigitSpanResult } from '../types';
import Button from './shared/Button';

type TestPhase = 'instruction' | 'getReady' | 'delay' | 'displaying' | 'input' | 'feedback';

// Predefined sequences with two versions for each mode
const sequenceVersions = {
    forward: [
        // Version 1 (Primary)
        [
            [5, 8, 2],
            [6, 4, 3, 9],
            [4, 2, 7, 3, 1],
            [6, 1, 9, 4, 7, 3],
            [5, 9, 1, 7, 4, 2, 8],
            [5, 8, 1, 9, 2, 6, 4, 7],
            [2, 7, 5, 3, 6, 2, 5, 8, 4]
        ],
        // Version 2 (Alternate)
        [
            [6, 9, 4],
            [7, 2, 8, 4],
            [7, 5, 8, 3, 6],
            [3, 9, 2, 4, 8, 7],
            [4, 1, 7, 9, 3, 8, 6],
            [3, 8, 2, 9, 5, 1, 7, 4],
            [3, 9, 4, 2, 5, 6, 8, 9]
        ]
    ],
    backward: [
        // Version 1 (Primary)
        [
            [2, 4],
            [6, 2, 9],
            [3, 2, 7, 9],
            [1, 5, 2, 8, 6],
            [8, 1, 2, 9, 3, 9, 5],
            [9, 4, 3, 7, 6, 2, 5, 8]
        ],
        // Version 2 (Alternate)
        [
            [5, 8],
            [4, 1, 5],
            [4, 9, 6, 8],
            [6, 1, 8, 4, 3],
            [7, 2, 4, 8, 5, 6],
            [7, 2, 8, 1, 9, 6, 5],
            [4, 7, 3, 9, 1, 9, 8, 2]
        ]
    ]
};


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
    const [sequenceVersion, setSequenceVersion] = useState(0); // 0 for primary, 1 for alternate
    const [consecutiveMistakes, setConsecutiveMistakes] = useState(0);
    const [trials, setTrials] = useState<DigitSpanTrial[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isTestComplete, setIsTestComplete] = useState(false);
    
    const inputRef = useRef<HTMLInputElement>(null);
    const sequencesForMode = sequenceVersions[mode];
    
    const startTrial = useCallback((index: number) => {
        if (index >= sequencesForMode[0].length) {
            setIsTestComplete(true);
            return;
        }
        // Use the current sequence version
        const newSeq = sequencesForMode[sequenceVersion][index];
        setSequence(newSeq);
        setUserInput('');
        setCurrentDigitIndex(0);
        setPhase('getReady');
    }, [sequencesForMode, sequenceVersion]);

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
        
        const currentSequence = sequencesForMode[sequenceVersion][trialIndex];
        const expectedAnswer = mode === 'forward' ? currentSequence.join('') : [...currentSequence].reverse().join('');
        const correct = userInput === expectedAnswer;

        const newTrial: DigitSpanTrial = { length: currentSequence.length, sequence: currentSequence, response: userInput, correct };
        const updatedTrials = [...trials, newTrial];
        setTrials(updatedTrials);
        setIsCorrect(correct);
        
        if (correct) {
            setConsecutiveMistakes(0);
            // If correct, stay on the same version for the next level
            if (trialIndex + 1 >= sequencesForMode[0].length) {
                completeTest(updatedTrials);
            }
        } else {
            // On mistake, switch to the other sequence version for the next attempt
            setSequenceVersion(prev => 1 - prev); // Toggles between 0 and 1
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
            // It was an incorrect answer, but not the second one.
            // Retry the same trial index, but startTrial will now use the new sequenceVersion.
            startTrial(trialIndex);
        }
    };

    const handleStartFirstTrial = () => {
        setTrialIndex(0);
        setSequenceVersion(0);
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

    const currentSequenceForDisplay = sequencesForMode[sequenceVersion][trialIndex];

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