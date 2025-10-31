import React, { useState } from 'react';
import Button from './shared/Button';

interface FinalScreenProps {
    onSubmit: (email: string) => void;
    content: {
        title: string;
        thankYou: string;
        emailPrompt: string;
        emailPlaceholder: string;
        submitButton: string;
    };
}

const FinalScreen: React.FC<FinalScreenProps> = ({ onSubmit, content }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email && !/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        setIsSubmitting(true);
        await onSubmit(email);
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in">
                <h1 className="text-4xl font-bold text-green-600 mb-4">{content.thankYou}</h1>
                <p className="text-slate-600 text-lg">Your results have been recorded.</p>
            </div>
        )
    }

    return (
        <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">{content.title}</h1>
            <p className="text-xl text-slate-600 mb-10">{content.thankYou}</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <label htmlFor="email" className="text-slate-600 mb-4 block">
                    {content.emailPrompt}
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={content.emailPlaceholder}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : content.submitButton}
                </Button>
            </form>
        </div>
    );
};

export default FinalScreen;