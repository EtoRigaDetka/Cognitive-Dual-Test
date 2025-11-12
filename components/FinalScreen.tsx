
import React, { useState } from 'react';
import Button from './shared/Button';

interface FinalScreenProps {
    onSubmit: () => Promise<void>;
    content: {
        title: string;
        description: string;
        thankYou: string;
        successDescription: string;
        submitButton: string;
        resultsTitle: string;
        forwardMaxLabel: string;
        backwardMaxLabel: string;
        quizScoreLabel: string;
        scoreFormat: string;
    };
    errorContent: string;
    results: {
        forwardMax: number;
        backwardMax: number;
        quizCorrect: number;
        quizTotal: number;
    } | null;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ onSubmit, content, errorContent, results }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmitStatus('idle'); // Reset status on retry
        try {
            await onSubmit();
            setSubmitStatus('success');
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-green-600 mb-4">{content.thankYou}</h1>
                <p className="text-slate-600 text-lg mb-8">{content.successDescription}</p>
                {results && (
                    <div className="mt-8 text-left bg-slate-50 p-6 rounded-lg border">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">{content.resultsTitle}</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-lg p-3 bg-white rounded-md shadow-sm">
                                <span className="font-medium text-slate-600">{content.forwardMaxLabel}:</span>
                                <span className="font-bold text-blue-600 text-2xl">{results.forwardMax}</span>
                            </div>
                            <div className="flex justify-between items-center text-lg p-3 bg-white rounded-md shadow-sm">
                                <span className="font-medium text-slate-600">{content.backwardMaxLabel}:</span>
                                <span className="font-bold text-blue-600 text-2xl">{results.backwardMax}</span>
                            </div>
                            <div className="flex justify-between items-center text-lg p-3 bg-white rounded-md shadow-sm">
                                <span className="font-medium text-slate-600">{content.quizScoreLabel}:</span>
                                <span className="font-bold text-blue-600 text-2xl">{results.quizCorrect} {content.scoreFormat} {results.quizTotal}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    if (submitStatus === 'error') {
        return (
             <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Submission Failed</h1>
                <p className="text-slate-600 text-lg mb-8">{errorContent}</p>
                 <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Retrying...' : 'Try Again'}
                </Button>
            </div>
        )
    }

    return (
        <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">{content.title}</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10">{content.description}</p>
            <div className="max-w-md mx-auto">
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : content.submitButton}
                </Button>
            </div>
        </div>
    );
};

export default FinalScreen;
