import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CategoryService }  from '../category.service';

import {Category} from '../category';

import { MetaTagsService} from '../meta-tags.service';

@Component({
  selector: 'app-category-topics',
  templateUrl: './category-topics.component.html',
  styleUrls: ['./category-topics.component.css']
})
export class CategoryTopicsComponent implements OnInit {

  @Input() category: Category;
  
  constructor(  
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location,
    private metaTagsService: MetaTagsService)
     { }

  ngOnInit() {
    this.getCategory();
     //SEO tags
     this.metaTagsService.setCanonicalURL();
     this.metaTagsService.setPageTitle("Selected Trends - Google Trends Watcher"); 
     this.metaTagsService.setMetaDescription("Use the selected trends page to find the latest topics breaking out in Google Trends");
        
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  save(): void {
    this.categoryService.updateCategory(this.category)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  
}
