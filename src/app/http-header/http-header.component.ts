import { Component, OnInit } from '@angular/core';
import {Http , Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-http-header',
  templateUrl: './http-header.component.html',
  styleUrls: ['./http-header.component.css']
})
export class HttpHeaderComponent implements OnInit {
  data=[]
  constructor(private http:Http) {
    let headers: Headers = new Headers();
      headers.append('X-API-TOKEN', 'ng-book');
      let opts: RequestOptions = new RequestOptions();
      opts.headers = headers;
      console.log(headers)
      this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
      .subscribe((res: Response) => {
        this.data = res.json();
        console.log(this.data)
      });

   }

  ngOnInit() {
  }

}
