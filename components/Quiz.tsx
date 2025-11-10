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
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [feedbackText, setFeedbackText] = useState('');
    const lang = language;

    const questionsForImage = QUIZ_DATA[imageIndex].questions;
    const currentQuestion = questionsForImage[currentQuestionIndex];
    
    const handleAnswerSelect = (index: number) => {
        setSelectedAnswer(index);
        const feedback = currentQuestion.options[lang][index].feedback;
        if (feedback) {
            setFeedbackText(feedback);
            setShowFeedbackModal(true);
        }
    };

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
        <div className="p-10 bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto ">
            {showFeedbackModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-xl text-center  w-full max-w-md">
                        <p className="text-xl text-slate-800 mb-6 font-medium">{feedbackText}</p>
                        <Button onClick={() => setShowFeedbackModal(false)}>
                            {commonContent.nextButton}
                        </Button>
                    </div>
                </div>
            )}
            <div className="text-right text-slate-500 mb-6">{content.questionProgress} {currentQuestionIndex + 1} {content.of} {questionsForImage.length}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 min-h-[56px] flex items-center">{currentQuestion[lang]}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {currentQuestion.options[lang].map((option, index) => (
                    <button 
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`p-4 rounded-lg border-2 text-left transition-all transform hover:scale-105 text-lg ${selectedAnswer === index ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-300' : 'bg-white text-slate-700 hover:bg-blue-50 border-slate-300'}`}
                    >
                        {option.text}
                    </button>
                ))}
            </div>

            <div className={`mt-8 transition-opacity duration-500 ease-in-out ${selectedAnswer !== null ? 'opacity-100' : 'opacity-0 invisible'}`}>
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-slate-700">{content.confidenceQuestion}</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                    {content.confidenceOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedConfidence(index)}
                            className={`flex-1 p-3 rounded-lg border-2 text-center transition-colors text-base ${selectedConfidence === index ? 'bg-green-600 text-white border-green-600 ring-2 ring-green-300' : 'bg-white text-slate-700 hover:bg-green-50 border-slate-300'}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="text-center mt-12">
                <Button onClick={handleNextQuestion} disabled={selectedAnswer === null || selectedConfidence === null}>
                    {commonContent.nextButton}
                </Button>
            </div>
        </div>
    );
};

export default Quiz;