import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { CategoryTopicsComponent } from './category-topics.component';
import { CategoryService } from '../category.service';
import { SeoService } from '../seo.service';

describe('CategoryTopicsComponent', () => {
  let component: CategoryTopicsComponent;
  let fixture: ComponentFixture<CategoryTopicsComponent>;

  const categoryService = jasmine.createSpyObj('CategoryService', [
    'getCategory'
  ]);

  const seoService = jasmine.createSpyObj('SeoService', [
    'setCanonicalURL',
    'setPageTitle',
    'setMetaDescription'
  ]);

  beforeEach(async(() => {

    categoryService.getCategory.and.returnValue(of());

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [CategoryTopicsComponent],
      providers: [
        { provide: CategoryService, useValue: categoryService },
        { provide: SeoService, useValue: seoService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have call setCanonicalURL function when init component`, () => {
    expect(seoService.setCanonicalURL).toHaveBeenCalled();
  });

  it(`should have call setPageTitle function when init component`, () => {
    expect(seoService.setPageTitle).toHaveBeenCalled();
  });

  it(`should have call setMetaDescription function when init component`, () => {
    expect(seoService.setMetaDescription).toHaveBeenCalled();
  });

});
