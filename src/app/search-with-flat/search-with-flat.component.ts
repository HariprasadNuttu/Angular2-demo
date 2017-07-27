import { Component, OnInit } from '@angular/core';
import { FormControl,   FormGroup,FormBuilder } from '@angular/forms';
import { SearchService } from '../services/search.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-search-with-flat',
  templateUrl: './search-with-flat.component.html',
  styleUrls: ['./search-with-flat.component.css']
})
export class SearchWithFlatComponent implements OnInit {
  searchField: FormControl;
   coolForm: FormGroup;
   result=[]
  constructor(private searchService:SearchService, private fb:FormBuilder) {

    this.searchField = new FormControl();
        this.coolForm = fb.group({search: this.searchField});

        this.searchField.valueChanges
          .debounceTime(400)
            .flatMap(term => this.searchService.search(term))
            .subscribe((result:any) => {
                this.result = result.artists.items
            });
  }

  ngOnInit() {
  }

}
