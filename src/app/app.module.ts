import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryTopicsComponent } from './category-topics/category-topics.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CategorySearchComponent } from './category-search/category-search.component';
import { TopicsSearchComponent } from './topics-search/topics-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryTopicsComponent,
    MessagesComponent,
    DashboardComponent,
    CategorySearchComponent,
    TopicsSearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), //See https://stackoverflow.com/questions/40331549/cant-bind-to-ngforof-since-it-isnt-a-known-property-of-tr-final-release
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
