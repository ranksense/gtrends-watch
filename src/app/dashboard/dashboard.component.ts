import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { CategoryService } from '../category.service';

import { MetaTagsService} from '../meta-tags.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private metaTagsService: MetaTagsService
    ) { }

  ngOnInit() {
    this.getCategories();

    //SEO tags
    this.metaTagsService.addMetaTags('Dashboard');
    this.metaTagsService.setCanonicalURL();
    this.metaTagsService.setPageTitle('Main Dashboard - Google Trends Watcher');
    this.metaTagsService.setMetaDescription("Use the dashboard to find the latest trends to watch for in Google Trends");
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.slice(1, 5));
  }
}
