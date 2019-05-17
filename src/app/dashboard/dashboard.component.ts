import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { CategoryService } from '../category.service';
import { SeoService} from '../seo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private seo: SeoService
    ) { }

  ngOnInit() {
    this.getCategories();

    //SEO tags
    this.seo.setCanonicalURL();
    this.seo.setPageTitle('Main Dashboard - Google Trends Watcher');
    this.seo.setMetaDescription('Use the dashboard to find the latest trends to watch for in Google Trends');
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.slice(1, 5));
  }
}
