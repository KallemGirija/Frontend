import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionViewComponent } from './test-question-view.component';

describe('TestQuestionViewComponent', () => {
  let component: TestQuestionViewComponent;
  let fixture: ComponentFixture<TestQuestionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestQuestionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
