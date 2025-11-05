import React, { useState } from 'react';
import Button from './shared/Button';
import { UserInfo } from '../types';

interface WelcomeScreenProps {
    onStart: (userInfo: UserInfo) => void;
    content: {
        title: string;
        subtitle: string;
        descriptions: string[];
        button: string;
        formTitle: string;
        ageLabel: string;
        genderLabel: string;
        genderOptions: string[];
        emailLabel: string;
        emailPlaceholder: string;
        formButton: string;
    };
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, content }) => {
    const [showForm, setShowForm] = useState(false);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const parsedAge = parseInt(age, 10);

        if (!age || isNaN(parsedAge) || parsedAge <= 0 || gender === '') {
            alert('Lūdzu, ievadiet derīgu vecumu un izvēlieties dzimumu. / Пожалуйста, введите корректный возраст и выберите пол.');
            return;
        }
        
        onStart({ age: parsedAge, gender, email });
    };

    if (showForm) {
        return (
            <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in w-full max-w-lg">
                <h1 className="text-3xl font-bold text-slate-800 mb-8">{content.formTitle}</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="age" className="block text-md font-medium text-slate-700 text-left mb-2">{content.ageLabel}</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="bg-white text-slate-900 text-lg w-full p-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            required
                            min="1"
                        />
                    </div>
                    <div>
                         <label className="block text-md font-medium text-slate-700 text-left mb-2">{content.genderLabel}</label>
                         <div className="flex flex-wrap justify-start gap-x-6 gap-y-2">
                            {content.genderOptions.map((option) => (
                                <label key={option} className="flex items-center space-x-2 text-lg text-slate-700 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={option}
                                        checked={gender === option}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                                        required
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                         </div>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-md font-medium text-slate-700 text-left mb-2">{content.emailLabel}</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={content.emailPlaceholder}
                            className="bg-white text-slate-900 text-lg w-full p-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                    <div className="pt-4">
                        <Button type="submit">{content.formButton}</Button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="text-center bg-white p-12 rounded-lg shadow-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-3">{content.title}</h1>
            <h2 className="text-xl text-slate-600 mb-10">{content.subtitle}</h2>
            <div className="max-w-3xl mx-auto text-left space-y-5 mb-12 text-slate-600 text-base md:text-lg leading-relaxed">
                {content.descriptions.map((desc, index) => <p key={index}>{desc}</p>)}
            </div>
            <Button onClick={() => setShowForm(true)}>{content.button}</Button>
        </div>
    );
};

export default WelcomeScreen;