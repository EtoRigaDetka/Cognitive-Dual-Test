
import React, { useState, useCallback } from 'react';
import { TestState, Language, DigitSpanResult, QuizAnswer } from './types';
import { content } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import DigitSpanTest from './components/DigitSpanTest';
import MemoryTest from './components/MemoryTest';
import FinalScreen from './components/FinalScreen';
import LanguageSwitcher from './components/LanguageSwitcher';
import { saveResults } from './services/apiService';
import TestProgress from './components/TestProgress';

const App: React.FC = () => {
    const [testState, setTestState] = useState<TestState>(TestState.Welcome);
    const [language, setLanguage] = useState<Language>('lv');
    
    const [forwardResult, setForwardResult] = useState<DigitSpanResult | null>(null);
    const [backwardResult, setBackwardResult] = useState<DigitSpanResult | null>(null);
    const [quizResult, setQuizResult] = useState<QuizAnswer[] | null>(null);

    const handleStart = useCallback(() => {
        setTestState(TestState.DigitSpanForward);
    }, []);

    const handleForwardComplete = useCallback((result: DigitSpanResult) => {
        setForwardResult(result);
        setTestState(TestState.DigitSpanBackward);
    }, []);

    const handleBackwardComplete = useCallback((result: DigitSpanResult) => {
        setBackwardResult(result);
        setTestState(TestState.MemoryTest);
    }, []);

    const handleMemoryTestComplete = useCallback((result: QuizAnswer[]) => {
        setQuizResult(result);
        setTestState(TestState.Final);
    }, []);

    const handleFinalSubmit = useCallback(async (email: string) => {
        if (!forwardResult || !backwardResult || !quizResult) {
            console.error("Missing test results, cannot submit.");
            alert(content[language].submissionError);
            return;
        }

        const finalData = {
            timestamp: new Date().toISOString(),
            email: email,
            forwardMax: forwardResult.maxLength,
            backwardMax: backwardResult.maxLength,
            forwardTrials: forwardResult.trials,
            backwardTrials: backwardResult.trials,
            quiz: quizResult,
        };

        try {
            await saveResults(finalData);
            alert(content[language].submissionSuccess);
        } catch (error) {
            console.error("Failed to save results:", error);
            alert(content[language].submissionError);
        }
    }, [forwardResult, backwardResult, quizResult, language]);

    const renderContent = () => {
        switch (testState) {
            case TestState.Welcome:
                return <WelcomeScreen onStart={handleStart} content={content[language].welcome} />;
            case TestState.DigitSpanForward:
                return <DigitSpanTest mode="forward" onComplete={handleForwardComplete} content={content[language].digitSpanForward} commonContent={content[language].common} />;
            case TestState.DigitSpanBackward:
                return <DigitSpanTest mode="backward" onComplete={handleBackwardComplete} content={content[language].digitSpanBackward} commonContent={content[language].common} />;
            case TestState.MemoryTest:
                return <MemoryTest onComplete={handleMemoryTestComplete} content={content[language].memoryTest} commonContent={content[language].common} language={language}/>;
            case TestState.Final:
                return <FinalScreen onSubmit={handleFinalSubmit} content={content[language].final} />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 font-sans relative">
            <div className="absolute top-4 right-4 z-10">
                <LanguageSwitcher currentLang={language} setLang={setLanguage} />
            </div>
             {testState !== TestState.Welcome && testState !== TestState.Final && (
                 <TestProgress testState={testState} language={language} />
            )}
            <main className="w-full max-w-5xl flex items-center justify-center">
                {renderContent()}
            </main>
        </div>
    );
};

export default App;