import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CategorySearchComponent } from './category-search.component';
import { CategoryService } from '../category.service';
import { of } from 'rxjs';

describe('CategorySearchComponent', () => {
  let component: CategorySearchComponent;
  let fixture: ComponentFixture<CategorySearchComponent>;

  const categoryService = jasmine.createSpyObj('CategoryService', [
    'searchCategories'
  ]);

  beforeEach(async(() => {

    categoryService.searchCategories.and.returnValue(of());

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CategorySearchComponent
      ],
      providers: [
        { provide: CategoryService, useValue: categoryService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
