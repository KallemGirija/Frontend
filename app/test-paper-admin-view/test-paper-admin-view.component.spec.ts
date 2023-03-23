import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaperAdminViewComponent } from './test-paper-admin-view.component';

describe('TestPaperAdminViewComponent', () => {
  let component: TestPaperAdminViewComponent;
  let fixture: ComponentFixture<TestPaperAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPaperAdminViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPaperAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
