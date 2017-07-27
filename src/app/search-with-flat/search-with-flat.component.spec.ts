import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithFlatComponent } from './search-with-flat.component';

describe('SearchWithFlatComponent', () => {
  let component: SearchWithFlatComponent;
  let fixture: ComponentFixture<SearchWithFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWithFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
