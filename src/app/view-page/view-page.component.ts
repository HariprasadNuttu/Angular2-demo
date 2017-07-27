import { Component, OnInit,ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
   @ViewChild(ViewChildComponent) alert: ViewChildComponent;
  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    // this.alert.show();
  }
}
