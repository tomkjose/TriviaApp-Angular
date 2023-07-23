export interface Option {
  value: string;
  label: string;
}

export interface Questions {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface QuestionsAndOptions {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
  selectedAnswer: string;
}

export interface ApiResponse {
  trivia_categories: { id: string; name: string }[];
}

export interface QuestionResponse {
  response_code: number;
  results: {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  }[];
}
