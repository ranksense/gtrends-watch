import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { CategoryTopicsComponent } from './category-topics.component';
import { CategoryService } from '../category.service';
import { MetaTagsService } from '../meta-tags.service';

describe('CategoryTopicsComponent', () => {
  let component: CategoryTopicsComponent;
  let fixture: ComponentFixture<CategoryTopicsComponent>;

  const categoryService = jasmine.createSpyObj('CategoryService', [
    'getCategory'
  ]);

  const metaTagsService = jasmine.createSpyObj('MetaTagsService', [
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
        { provide: MetaTagsService, useValue: metaTagsService }
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
    expect(metaTagsService.setCanonicalURL).toHaveBeenCalled();
  });

  it(`should have call setPageTitle function when init component`, () => {
    expect(metaTagsService.setPageTitle).toHaveBeenCalled();
  });

  it(`should have call setMetaDescription function when init component`, () => {
    expect(metaTagsService.setMetaDescription).toHaveBeenCalled();
  });

});
