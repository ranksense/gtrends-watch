import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-topics-search',
  templateUrl: './topics-search.component.html',
  styleUrls: ['./topics-search.component.css']
})
export class TopicsSearchComponent implements OnInit {

  categories$: Observable<Category[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private categoryService: CategoryService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.categories$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.categoryService.searchTopics(term)),
    );
  }
}
