import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03',
  standalone: true,
  imports: [],
  templateUrl: './ex03.component.html',
  styleUrl: './ex03.component.css'
})
export class Ex03Component {
  n: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
  }
}
export class Exercise3Component {
  grade: number = 1;

  getGradeClass(grade: number): string {
    if (grade < 5) {
      return 'fail';
    } else if (grade === 10) {
      return 'excellent';
    } else {
      return 'pass';
    }
  }
}
