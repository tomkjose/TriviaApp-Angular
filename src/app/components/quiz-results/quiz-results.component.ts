import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

import { QuestionsAndOptions } from '../../shared/interface/interface';
@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css'],
})
export class QuizResultsComponent implements OnInit {
  results: QuestionsAndOptions[] = [];
  localResults: QuestionsAndOptions[] = [];
  score: number = 0;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('questions');
    if (storedData !== null) {
      this.localResults = JSON.parse(storedData);
    }
    if (this.questionsService.getResults.length === 0) {
      this.results = this.localResults;
    } else {
      this.results = this.questionsService.getResults;
    }
    this.score = this.calculateScore(this.results);
    // console.log('this.score', this.score);
    // console.log('this.results', this.results);
    // console.log('this.localResults', this.localResults);
  }

  private calculateScore(results: QuestionsAndOptions[]): number {
    let score = 0;
    // console.log('results', results);
    for (const result of results) {
      // console.log('esult.selectedAnswer', result.selectedAnswer);
      // console.log('result.correct_answer', result.correct_answer);
      if (result.selectedAnswer === result.correct_answer) {
        // console.log('esult.selectedAnswer', result.selectedAnswer);
        // console.log('result.correct_answer', result.correct_answer);
        score++;
      }
    }
    return score;
  }
}
