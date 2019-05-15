import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TopicsSearchComponent } from './topics-search.component';
import { CategoryService } from '../category.service';
import { of } from 'rxjs';

describe('TopicsSearchComponent', () => {
  let component: TopicsSearchComponent;
  let fixture: ComponentFixture<TopicsSearchComponent>;

  const categoryService = jasmine.createSpyObj('CategoryService', [
    'searchTopics'
  ]);

  categoryService.searchTopics.and.returnValue( of() );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ TopicsSearchComponent ],
      providers: [
        { provide: CategoryService, useValue: categoryService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
