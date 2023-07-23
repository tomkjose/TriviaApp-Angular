import { Component } from '@angular/core';
import { Router } from '@angular/router';
Router;
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  title: string = 'Results';

  constructor(private router: Router) {}

  onClear() {
    this.router.navigate(['/']);
  }
}
