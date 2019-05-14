import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsSearchComponent } from './topics-search.component';

describe('TopicsSearchComponent', () => {
  let component: TopicsSearchComponent;
  let fixture: ComponentFixture<TopicsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsSearchComponent ]
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
