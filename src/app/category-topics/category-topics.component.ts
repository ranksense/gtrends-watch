import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CategoryService } from '../category.service';
import { Category } from '../category';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-category-topics',
  templateUrl: './category-topics.component.html',
  styleUrls: ['./category-topics.component.css']
})
export class CategoryTopicsComponent implements OnInit, OnDestroy {

  category: Category;

  private componentDestroyed = new Subject();

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location,
    private seo: SeoService
  ) {
  }

  ngOnInit() {
    this.getCategory();
    // SEO tags
    this.seo.setCanonicalURL();
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.categoryService.getCategory(id).pipe(
      takeUntil(this.componentDestroyed)
    ).subscribe((category: Category) => {
      this.category = category;

      this.seo.setPageTitle(`${this.category.name} Trends - Google Trends Watcher`);
      this.seo.setMetaDescription(`Use the ${this.category.name} trends page to find the latest topics breaking out in Google Trends`);
    });
  }

  save(): void {
    this.categoryService.updateCategory(this.category)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
