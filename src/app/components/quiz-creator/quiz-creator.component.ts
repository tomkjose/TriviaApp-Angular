import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import {
  ApiResponse,
  QuestionResponse,
} from '../../shared/interface/interface';
import { NgForm } from '@angular/forms';
import { QuestionsService } from 'src/app/services/questions.service';
import { Option, Questions } from '../../shared/interface/interface';

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css'],
})
export class QuizCreatorComponent implements OnInit {
  category: number = 0;
  difficulty: string = '';
  categoryArray: Option[] = [];
  difficultyArray: string[] = ['easy', 'medium', 'hard'];
  questions: Questions[] = [];
  isValidSubmit: boolean = false;
  isLoading: boolean = false;
  errormessage: string = '';
  constructor(
    private quizService: QuizService,
    private questionsService: QuestionsService
  ) {}

  ngOnInit() {
    this.quizService.getOptions().subscribe((resData: ApiResponse) => {
      // console.log('resData', resData);
      this.categoryArray = resData.trivia_categories.map((category) => ({
        value: category.id,
        label: category.name,
      }));
      // console.log(' this.categoryArray', this.categoryArray);
    });
  }

  onCreate(forms: NgForm) {
    this.isValidSubmit = true;
    this.isLoading = true;

    this.category = forms.value.category;
    this.difficulty = forms.value.difficulty;

    // console.log('forms', forms);
    this.quizService.getQuestions(this.category, this.difficulty).subscribe(
      (resData: QuestionResponse) => {
        this.questions = resData.results;
        this.questionsService.setQuestion = this.questions;
        // console.log('questions', this.questions);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.errormessage = error;
        console.log('error', this.errormessage);
      }
    );

    // console.log('this.category', this.category);
    // console.log('this.difficulty', this.difficulty);
  }
}
