import { Injectable } from '@angular/core';

import { Questions, QuestionsAndOptions } from '../shared/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions: Questions[] = [];

  private results: QuestionsAndOptions[] = [];

  get getQuestions(): Questions[] {
    return this.questions;
  }

  set setQuestion(newQuestions: Questions[]) {
    this.questions = newQuestions;
  }

  get getResults(): QuestionsAndOptions[] {
    return this.results;
  }

  set setResults(newResults: QuestionsAndOptions[]) {
    this.results = newResults;
  }
}
