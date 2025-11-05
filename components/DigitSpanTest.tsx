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
    const [mistakesAtLength, setMistakesAtLength] = useState(0);
    const [trials, setTrials] = useState<DigitSpanTrial[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    
    const inputRef = useRef<HTMLInputElement>(null);
    const sequences = mode === 'forward' ? forwardSequences : backwardSequences;
    
    const startTrial = useCallback(() => {
        if (trialIndex >= sequences.length) {
            // This case should be handled by handleSubmit, but as a safeguard:
            const maxLength = trials.filter(t => t.correct).reduce((max, t) => Math.max(max, t.length), 0);
            onComplete({ maxLength, trials });
            return;
        }
        const newSeq = sequences[trialIndex];
        setSequence(newSeq);
        setUserInput('');
        setCurrentDigitIndex(0);
        setPhase('getReady');
    }, [trialIndex, sequences, onComplete, trials]);

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
        
        const currentSequence = sequences[trialIndex];
        const expectedAnswer = mode === 'forward' ? currentSequence.join('') : [...currentSequence].reverse().join('');
        const correct = userInput === expectedAnswer;
        const newTrial: DigitSpanTrial = { length: currentSequence.length, sequence: currentSequence, response: userInput, correct };
        const updatedTrials = [...trials, newTrial];

        setTrials(updatedTrials);
        setIsCorrect(correct);
        setPhase('feedback');
        
        if (correct) {
            setMistakesAtLength(0);
            if (trialIndex + 1 >= sequences.length) {
                // Completed all trials successfully
                const maxLength = updatedTrials.filter(t => t.correct).reduce((max, t) => Math.max(max, t.length), 0);
                onComplete({ maxLength, trials: updatedTrials });
            } else {
                setTrialIndex(prev => prev + 1);
            }
        } else {
            if (mistakesAtLength === 1) {
                // Second mistake at this length, end the test
                const maxLength = updatedTrials.filter(t => t.correct).reduce((max, t) => Math.max(max, t.length), 0);
                onComplete({ maxLength, trials: updatedTrials });
            } else {
                setMistakesAtLength(1);
                // Stay at the same trialIndex to repeat a sequence of the same length
                // Note: With predefined sequences, this means the user will get a new, different sequence of the same length (if available)
                // or the test ends if there are no more sequences of this length.
                // For this implementation, we will simply try the next sequence in the list.
            }
        }
    };

    const handleNext = () => {
       // If the previous answer was incorrect and it was the first mistake, we don't advance trialIndex.
       // However, with fixed sequences, we must always advance to the next trial.
       // The logic in handleSubmit already handles advancing or ending the test.
       // This button just triggers the next state transition.
        
        // If the last answer was incorrect, and it was the first mistake for that length,
        // we move to the next trial which should be of the same length. If not, the test ends.
        // With the new fixed list, we just advance the index unless the test is over.
        if (!isCorrect && mistakesAtLength === 1) {
            // A mistake was made, but it's not the second one.
            // We advance to the next trial in the list.
            if(trialIndex + 1 >= sequences.length) {
                 const maxLength = trials.filter(t => t.correct).reduce((max, t) => Math.max(max, t.length), 0);
                 onComplete({ maxLength, trials });
                 return;
            }
            setTrialIndex(prev => prev + 1);
        }

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
                 // The test might have ended after this trial
                const isTestOver = (trialIndex +1 >= sequences.length && isCorrect) || (!isCorrect && mistakesAtLength === 1 && (trialIndex + 1 >= sequences.length || sequences[trialIndex+1].length > sequences[trialIndex].length));
                // Simplified end condition check for fixed list
                const testEnded = (trialIndex >= sequences.length) || (!isCorrect && mistakesAtLength === 1);


                // Let's refine the logic to check if the test *should* end.
                const nextTrialIndex = isCorrect ? trialIndex + 1 : trialIndex + 1; // Always advance after feedback
                const isFinished = nextTrialIndex >= sequences.length || (!isCorrect && mistakesAtLength === 1);


                // Check if the test is over based on the last trial result
                const wasLastTrialFinal = 
                    (isCorrect && trialIndex === sequences.length - 1) || // Last trial correct
                    (!isCorrect && mistakesAtLength === 1); // Second mistake

                // Let's re-evaluate termination condition within feedback
                let isComplete = false;
                if(isCorrect && trialIndex === sequences.length - 1) {
                    isComplete = true; // Last one correct
                } else if (!isCorrect && mistakesAtLength === 1) {
                    // Check if the *next* sequence has a different length. If so, two mistakes on the same length means termination.
                    // With a fixed list, we can simplify: two mistakes in a row on sequences of the same length.
                    // The logic in handleSubmit already calls onComplete. Here we just decide whether to show the "Next" button.
                    const lastTrial = trials[trials.length - 1];
                    const secondToLastTrial = trials.length > 1 ? trials[trials.length - 2] : null;

                    if (!lastTrial.correct && secondToLastTrial && !secondToLastTrial.correct && secondToLastTrial.length === lastTrial.length) {
                       isComplete = true;
                    }
                }


                return (
                    <div className="text-center">
                        <p className={`text-4xl font-bold mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {isCorrect ? commonContent.correct : commonContent.incorrect}
                        </p>
                        {/* The check for test completion is handled by onComplete, so we always show Next unless it's the very last trial */}
                        {<Button onClick={handleNext}>{commonContent.nextButton}</Button>}
                    </div>
                );
        }
    };

    return (
        <div className="bg-white p-12 rounded-lg shadow-lg w-full animate-fade-in">
            <div className="text-center text-slate-500 mb-8 h-6">
                {phase !== 'instruction' && sequences[trialIndex] ? (
                    <p className="animate-fade-in">{content.currentLength} {sequences[trialIndex].length}</p>
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