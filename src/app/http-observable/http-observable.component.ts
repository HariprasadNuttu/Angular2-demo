import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css']
})
export class HttpObservableComponent implements OnInit {

  private doctors = [];

  constructor(private http:Http) {


    http.get('http://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.doctors.push(data);

        });

        /*

        http.get('http://jsonplaceholder.typicode.com/users/')
              .flatMap((response) => response.json())
              .filter((person:any) => person.id > 5)
              .map((person) => "Dr. " + person.name)
              .subscribe((data) => {
                console.log(data)
                this.doctors.push(data);
              });
        */
  }

  ngOnInit() {


  }

}
