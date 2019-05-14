import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CategoriesComponent } from './categories.component';
import { CategoryService } from '../category.service';
import { MetaTagsService } from '../meta-tags.service';
import { of } from 'rxjs';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  const categoryService = jasmine.createSpyObj('CategoryService', [
    'getCategories'
  ]);

  const metaTagsService = jasmine.createSpyObj('MetaTagsService', [
    'setCanonicalURL',
    'setPageTitle',
    'setMetaDescription'
  ]);

  beforeEach(async(() => {

    categoryService.getCategories.and.returnValue( of() );

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CategoriesComponent],
      providers: [
        { provide: CategoryService, useValue: categoryService },
        { provide: MetaTagsService, useValue: metaTagsService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have call setCanonicalURL function when init component`, () => {
    expect(metaTagsService.setCanonicalURL).toHaveBeenCalled();
  });

  it(`should have call setPageTitle function when init component`, () => {
    const pageTitle = 'Global Trends - Google Trends Watcher';
    expect(metaTagsService.setPageTitle).toHaveBeenCalledWith(pageTitle);
  });

  it(`should have call setMetaDescription function when init component`, () => {
    expect(metaTagsService.setMetaDescription).toHaveBeenCalled();
  });

});
