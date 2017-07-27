import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http
    .get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
    .map((response) => response.json())
    .catch((e) => {
      console.log(e)
      return Observable.throw(
        new Error(`${ e.status } ${ e.statusText }`)
      );
    });
  }
}
