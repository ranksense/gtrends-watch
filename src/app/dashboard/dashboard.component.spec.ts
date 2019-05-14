import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { CategoryService } from '../category.service';
import { MetaTagsService } from '../meta-tags.service';

@Component({ selector: 'app-category-search', template: '' })
class CategorySearchStubComponent { }

@Component({ selector: 'app-topics-search', template: '' })
class TopicsSearchComponent { }

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const categoryService = jasmine.createSpyObj('CategoryService', [
    'getCategories'
  ]);

  const metaTagsService = jasmine.createSpyObj('MetaTagsService', [
    'setCanonicalURL',
    'setPageTitle',
    'setMetaDescription'
  ]);

  beforeEach(async(() => {

    categoryService.getCategories.and.returnValue(of());

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DashboardComponent,
        TopicsSearchComponent,
        CategorySearchStubComponent
      ],
      providers: [
        { provide: CategoryService, useValue: categoryService },
        { provide: MetaTagsService, useValue: metaTagsService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
