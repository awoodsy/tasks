//seting backbone to quiz and question
export interface Quiz {
    title: string;
    description: string;
    numQuestions: string;
    totalPoints: string;
    questions: Question[];
}
export interface Question {
    name: string;
    options: string[];
    type: string;
    points: string;
    published: boolean;
}
