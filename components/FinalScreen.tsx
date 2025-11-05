import React, { useState } from 'react';
import Button from './shared/Button';

interface FinalScreenProps {
    onSubmit: () => Promise<void>;
    content: {
        title: string;
        thankYou: string;
        submitButton: string;
    };
    errorContent: string;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ onSubmit, content, errorContent }) => {
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
            <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in">
                <h1 className="text-4xl font-bold text-green-600 mb-4">{content.thankYou}</h1>
                <p className="text-slate-600 text-lg">Your results have been recorded.</p>
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
            <p className="text-lg md:text-xl text-slate-600 mb-10">{content.thankYou}</p>
            <div className="max-w-md mx-auto">
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : content.submitButton}
                </Button>
            </div>
        </div>
    );
};

export default FinalScreen;