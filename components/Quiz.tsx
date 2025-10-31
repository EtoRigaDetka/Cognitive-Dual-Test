
import React, { useState } from 'react';
import { QuizAnswer } from '../types';
import { QUIZ_DATA } from '../constants';
import Button from './shared/Button';
import { Language } from '../types';

interface QuizProps {
    imageIndex: number;
    onQuizComplete: (answers: QuizAnswer[]) => void;
    content: {
        questionProgress: string;
        of: string;
        confidenceQuestion: string;
        confidenceOptions: string[];
    };
    commonContent: any;
    language: Language;
}

const Quiz: React.FC<QuizProps> = ({ imageIndex, onQuizComplete, content, commonContent, language }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswer[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [selectedConfidence, setSelectedConfidence] = useState<number | null>(null);
    const lang = language;

    const questionsForImage = QUIZ_DATA[imageIndex];
    const currentQuestion = questionsForImage[currentQuestionIndex];
    
    const handleNextQuestion = () => {
        if (selectedAnswer === null || selectedConfidence === null) {
            alert('Please select an answer and a confidence level.');
            return;
        }

        const newAnswer: QuizAnswer = {
            imageNr: imageIndex + 1,
            questionNr: currentQuestionIndex + 1,
            answer: selectedAnswer + 1,
            confidence: selectedConfidence + 1,
        };
        const updatedAnswers = [...answers, newAnswer];
        setAnswers(updatedAnswers);

        setSelectedAnswer(null);
        setSelectedConfidence(null);
        
        if (currentQuestionIndex < questionsForImage.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            onQuizComplete(updatedAnswers);
        }
    };
    
    return (
        <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto animate-fade-in">
            <div className="text-right text-slate-500 mb-4">{content.questionProgress} {currentQuestionIndex + 1} {content.of} {questionsForImage.length}</div>
            <h2 className="text-2xl font-semibold mb-6 text-slate-700 min-h-[56px] flex items-center">{currentQuestion[lang].q}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentQuestion[lang].a.map((option, index) => (
                    <button 
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        className={`p-4 rounded-lg border-2 text-left transition-transform transform hover:scale-105 ${selectedAnswer === index ? 'bg-blue-500 text-white border-blue-500' : 'bg-white hover:bg-blue-50 border-slate-300'}`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className={`mt-8 transition-opacity duration-500 ease-in-out ${selectedAnswer !== null ? 'opacity-100' : 'opacity-0 invisible'}`}>
                <h3 className="text-xl font-semibold mb-4 text-slate-700">{content.confidenceQuestion}</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-2">
                    {content.confidenceOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedConfidence(index)}
                            className={`flex-1 p-3 rounded-lg border-2 text-center transition-colors ${selectedConfidence === index ? 'bg-green-500 text-white border-green-500' : 'bg-white hover:bg-green-50 border-slate-300'}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="text-center mt-10">
                <Button onClick={handleNextQuestion} disabled={selectedAnswer === null || selectedConfidence === null}>
                    {commonContent.nextButton}
                </Button>
            </div>
        </div>
    );
};

export default Quiz;
