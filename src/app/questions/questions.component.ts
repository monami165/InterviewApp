import { Component, OnInit } from '@angular/core';
import { Question } from '../model.question';
import { QuestionService } from '../question.service';

import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  msg:string = "I'm ready to begin!";
  msg1:string = "Submit Answers"
  flag:boolean;
  flag1:boolean;
  flag2:boolean;
  questionList:Question[];
  answerAry:string[];
  keys:string[] = ["c","a","b","a","b","c","c","a","b","b"];

  score:number
  numQ:number
  

  choices:any = [
    'a',
    'b',
    'c'
  ];

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
  }

  loadQuestions(): void {
    this.flag = true;
    this.questionService.loadQuestionDetails().subscribe(data=>this.questionList=data);

    // Had to hardcode because I do not know this.questionList's type (appears as undefined)
    this.answerAry = new Array<string>(10);
  }

  radioChange(event:any, index:number, choice:string): void {
    this.answerAry[index-1] = event.target.value;
  }

  grade(): void {
    if (!this.answerAry.includes(undefined)) {
      let correct:number = 0
      for (let i=0; i<this.answerAry.length; i++) {
        if (this.answerAry[i] == this.keys[i]) {
          correct++
        }
      }
      if (correct/this.answerAry.length >= 0.7) {
        alert("You've passed with " + String(Math.round(correct/this.answerAry.length*100)) + "%")
      } else {
        alert("Sorry, you've scored " + String(Math.round(correct/this.answerAry.length*100)) + "%")
      }
      this.flag2 = true;
    } else {
      alert("please answer all the questions!")
    }
  }

  reload(): void{
    location.reload()
  }
}
