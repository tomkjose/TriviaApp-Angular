import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import {
  Questions,
  QuestionsAndOptions,
} from '../../shared/interface/interface';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent implements OnInit {
  questions: QuestionsAndOptions[] = [];
  quizData: string[] = [];
  options: string[] = [];

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questions = this.questionsService.getQuestions.map(
      (question: Questions) => ({
        question: question.question,
        correct_answer: question.correct_answer,
        incorrect_answers: question.incorrect_answers,
        answers: this.shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
        selectedAnswer: '',
      })
    );

    // console.log('this.questions ', this.questions);
  }

  shuffleArray(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }

  onSubmit() {
    this.questionsService.setResults = this.questions;
    localStorage.setItem('questions', JSON.stringify(this.questions));
    this.router.navigate(['/results']);
  }

  isSubmitEnabled() {
    return this.questions.every((question) => question.selectedAnswer !== '');
  }
}
