import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { CategoryService } from '../category.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.getCategories();

    //SEO tags
    this.seo.setCanonicalURL();
    this.seo.setPageTitle('Global Trends - Google Trends Watcher');
    this.seo.setMetaDescription('Use the global trends page to narrow down into specific categories');

  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoryService.addCategory({ name } as Category)
      .subscribe(hero => {
        this.categories.push(hero);
      });
  }

  delete(category: Category): void {
    this.categories = this.categories.filter(c => c !== category);
    this.categoryService.deleteCategory(category).subscribe();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
