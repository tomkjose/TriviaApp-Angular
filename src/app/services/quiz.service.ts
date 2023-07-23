import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ApiResponse, QuestionResponse } from '../shared/interface/interface';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getOptions() {
    return this.http.get<ApiResponse>('https://opentdb.com/api_category.php');
  }

  getQuestions(category: number, difficulty: string) {
    return this.http
      .get<QuestionResponse>(
        `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
      )
      .pipe(catchError(this.handleError));
  }

  handleError(responseError: HttpErrorResponse) {
    let errorMessage = 'An Unkown Error';
    return throwError(errorMessage);
  }
}
