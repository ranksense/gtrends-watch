import { Component } from '@angular/core';
import { MetaTagsService } from './meta-tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google Trends Watcher';
  constructor(private metaTagsService: MetaTagsService) {
    this.metaTagsService.addMetaTags('Home');
  }
}
