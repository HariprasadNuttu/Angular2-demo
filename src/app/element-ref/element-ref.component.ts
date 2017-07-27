import { Component, OnInit,ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.css']
})
export class ElementRefComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {

    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .subscribe(
        (result: any) => { // on sucesss
          console.log(result)
        },
        (err: any) => { // on error
          console.log(err);
        },
        () => { // on completion
          console.log("Completed")
        }
      );
  }

}
