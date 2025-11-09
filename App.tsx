import React, { useState, useCallback } from 'react';
import { TestState, Language, DigitSpanResult, QuizAnswer, UserInfo } from './types';
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
    
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [forwardResult, setForwardResult] = useState<DigitSpanResult | null>(null);
    const [backwardResult, setBackwardResult] = useState<DigitSpanResult | null>(null);
    const [quizResult, setQuizResult] = useState<QuizAnswer[] | null>(null);

    const handleStart = useCallback((info: UserInfo) => {
        setUserInfo(info);
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

    const handleFinalSubmit = useCallback(async () => {
        if (!forwardResult || !backwardResult || !quizResult || !userInfo) {
            console.error("Missing test results or user info, cannot submit.");
            throw new Error(content[language].submissionError);
        }

        const finalData = {
            timestamp: new Date().toISOString(),
            email: userInfo.email || '',
            age: userInfo.age,
            gender: userInfo.gender,
            forwardMax: forwardResult.maxLength,
            backwardMax: backwardResult.maxLength,
            forwardTrials: JSON.stringify(forwardResult.trials),
            backwardTrials: JSON.stringify(backwardResult.trials),
            quiz: JSON.stringify(quizResult),
        };

        try {
            await saveResults(finalData);
        } catch (error) {
            console.error("Failed to save results:", error);
            // Re-throw the error so the UI component can handle it
            throw error;
        }
    }, [forwardResult, backwardResult, quizResult, userInfo, language]);

    const renderContent = () => {
        switch (testState) {
            case TestState.Welcome:
                return <WelcomeScreen onStart={handleStart} content={content[language].welcome} />;
            case TestState.DigitSpanForward:
                return <DigitSpanTest key="forward" mode="forward" onComplete={handleForwardComplete} content={content[language].digitSpanForward} commonContent={content[language].common} />;
            case TestState.DigitSpanBackward:
                return <DigitSpanTest key="backward" mode="backward" onComplete={handleBackwardComplete} content={content[language].digitSpanBackward} commonContent={content[language].common} />;
            case TestState.MemoryTest:
                return <MemoryTest onComplete={handleMemoryTestComplete} content={content[language].memoryTest} commonContent={content[language].common} language={language}/>;
            case TestState.Final:
                return <FinalScreen onSubmit={handleFinalSubmit} content={content[language].final} errorContent={content[language].submissionError} />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 relative">
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