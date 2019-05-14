import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTopicsComponent } from './category-topics.component';

describe('CategoryTopicsComponent', () => {
  let component: CategoryTopicsComponent;
  let fixture: ComponentFixture<CategoryTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTopicsComponent ]
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
});
