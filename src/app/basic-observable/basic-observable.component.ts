import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.css']
})
export class BasicObservableComponent implements OnInit {
  private data: Observable<Array<number>>;
  private values: Array<any> = [];
  private anyErrors: boolean;
  private finished: boolean;

  constructor() { }

  ngOnInit() {


  }

  init(){

    this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);

          setTimeout(() => {
              observer.next(43);
          }, 2000);
          /*
           setTimeout(() => {
               observer.error(new Error('Something bad happened!'));
           }, 2000);
           */
          setTimeout(() => {
              observer.complete();
          }, 3000);
      });

      let subscription = this.data.subscribe(
          value =>{
            this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
        }
      );

      /*
      let subscription = this.data.forEach(v => this.values.push(v))
            .then(() => this.finished = true);
            */
  }
}
