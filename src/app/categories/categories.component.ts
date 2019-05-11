import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
//import { CATEGORIES } from '../mock-categories';
import {CategoryService} from "../category.service";
 
import { MetaTagsService} from '../meta-tags.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
 
export class CategoriesComponent implements OnInit {
 
  categories: Category[];
 
  constructor(private categoryService: CategoryService, private metaTagsService: MetaTagsService ) { }
 
  ngOnInit() {
    this.getCategories();

   //SEO tags
   this.metaTagsService.setCanonicalURL();
   this.metaTagsService.setPageTitle('Global Trends - Google Trends Watcher'); 
   this.metaTagsService.setMetaDescription("Use the global trends page to narrow down into specific categories");
    
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