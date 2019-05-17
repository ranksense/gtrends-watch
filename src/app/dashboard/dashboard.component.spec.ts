import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { CategoryService } from '../category.service';
import { SeoService } from '../seo.service';

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

  const seoService = jasmine.createSpyObj('SeoService', [
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
        { provide: SeoService, useValue: seoService }
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

  it(`should have call function setCanonicalURL when init component`, () => {
    expect(seoService.setCanonicalURL).toHaveBeenCalled();
  });

  it(`should have call function setPageTitle when init component`, () => {
    const pageTitle = 'Main Dashboard - Google Trends Watcher';
    expect(seoService.setPageTitle).toHaveBeenCalledWith(pageTitle);
  });

  it(`should have call function setMetaDescription when init component`, () => {
    expect(seoService.setMetaDescription).toHaveBeenCalled();
  });

});
