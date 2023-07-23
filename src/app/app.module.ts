import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizCreatorComponent } from './components/quiz-creator/quiz-creator.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './shared/loader/loader.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    QuizCreatorComponent,
    QuizQuestionsComponent,
    QuizResultsComponent,
    HomeComponent,
    ResultComponent,
    NotFoundComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
