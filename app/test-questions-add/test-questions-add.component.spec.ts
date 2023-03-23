import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionsAddComponent } from './test-questions-add.component';

describe('TestQuestionsAddComponent', () => {
  let component: TestQuestionsAddComponent;
  let fixture: ComponentFixture<TestQuestionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestQuestionsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestQuestionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
