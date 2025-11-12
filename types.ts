
export enum TestState {
    Welcome,
    DigitSpanForward,
    DigitSpanBackward,
    MemoryTest,
    Final,
}

export type Language = 'lv' | 'ru';

export interface UserInfo {
    age: number;
    gender: string;
    email: string;
    version: 'v1' | 'v2';
}

export interface DigitSpanTrial {
    length: number;
    sequence: number[];
    response: string;
    correct: boolean;
}

export interface DigitSpanResult {
    maxLength: number;
    trials: DigitSpanTrial[];
}

export interface QuizAnswer {
    imageNr: number;
    questionNr: number;
    answer: number;
    confidence: number;
    correct: boolean;
}
