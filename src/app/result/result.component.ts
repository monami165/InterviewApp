import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
  }

  calculate(score:string) {
    console.log(this.questionService.score);
  }

}
