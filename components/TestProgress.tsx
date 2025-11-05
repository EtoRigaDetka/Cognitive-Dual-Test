import React from 'react';
import { TestState, Language } from '../types';

interface TestProgressProps {
    testState: TestState;
    language: Language;
}

const progressContent = {
    ru: {
        [TestState.DigitSpanForward]: 'Часть 1: Запоминание цифр (Прямой порядок)',
        [TestState.DigitSpanBackward]: 'Часть 2: Запоминание цифр (Обратный порядок)',
        [TestState.MemoryTest]: 'Часть 3: Точность воспроизведения памяти',
    },
    lv: {
        [TestState.DigitSpanForward]: '1. daļa: Ciparu iegaumēšana (Tiešā secība)',
        [TestState.DigitSpanBackward]: '2. daļa: Ciparu iegaumēšana (Atgriezeniskā secībā)',
        [TestState.MemoryTest]: '3. daļa: Atmiņas atveidošanas precizitāte',
    }
};

const TestProgress: React.FC<TestProgressProps> = ({ testState, language }) => {
    // A type guard to ensure testState is a valid key for progressContent
    const isValidState = (state: TestState): state is keyof typeof progressContent.ru => {
        return state in progressContent.ru;
    }

    if (!isValidState(testState)) {
        return null;
    }
    
    // Quick fix for the key, as TS doesn't know MemoryTest is a valid key without more complex typing
    const text = progressContent[language][testState as keyof typeof progressContent.lv];

    return (
        <div className="w-full max-w-5xl mb-4 text-center animate-fade-in">
            <div className="inline-block bg-white py-2 px-6 rounded-lg shadow-md border border-slate-200">
                <p className="text-base font-medium text-slate-600">{text}</p>
            </div>
        </div>
    );
};

export default TestProgress;