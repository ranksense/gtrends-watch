import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

 
import { Category } from './category';
//import { CATEGORIES } from './mock-categories';

import { MessageService } from './message.service';

import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  getCategories(): Observable<Category[]> {
    // TODO: send the message _after_ fetching the categories
    //this.messageService.add('CategoryService: fetched categories');
    //return of(CATEGORIES);
    return this.http.get<Category[]>(this.categoriesUrl)
    .pipe(
      tap(_ => this.log('fetched categories')),
      catchError(this.handleError<Category[]>('getCategories', []))
    );

  }
 
  /** GET category by id. Will 404 if id not found */
  getCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => this.log(`fetched category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

    /** PUT: update the category on the server */
  updateCategory(category: Category): Observable<any> {
    return this.http.put(this.categoriesUrl, category, httpOptions).pipe(
      tap(_ => this.log(`updated category id=${category.id}`)),
      catchError(this.handleError<any>('updateCategory'))
    );
  }

  /** POST: add a new category to the server */
  addCategory (category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, category, httpOptions).pipe(
      tap((newCategory: Category) => this.log(`added category w/ id=${newCategory.id}`)),
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  /** DELETE: delete the category from the server */
  deleteCategory (category: Category | number): Observable<Category> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this.categoriesUrl}/${id}`;

    return this.http.delete<Category>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted category id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

  /* GET categories whose name contains search term */
  searchCategories(term: string): Observable<Category[]> {
    if (!term.trim()) {
      // if not search term, return empty category array.
      return of([]);
    }
    return this.http.get<Category[]>(`${this.categoriesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found categories matching "${term}"`)),
      catchError(this.handleError<Category[]>('searchCategories', []))
    );
  }

  /* GET topics whose title contains search term */
  searchTopics(term: string): Observable<Category[]> {
    if (!term.trim()) {
      // if not search term, return empty category array.
      return of([]);
    }
    return this.http.get<Category[]>(`${this.categoriesUrl}/?topics=${term}`).pipe(
      tap(_ => this.log(`found categories with topics matching "${term}"`)),
      catchError(this.handleError<Category[]>('searchTopics', []))
    );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private categoriesUrl = 'api/categories';  // URL to web api
  //private topicsUrl = 'api/topics';  // URL to web api

  private log(message: string) {
    this.messageService.add(`CategoryService: ${message}`);
  }

}
