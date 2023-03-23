import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaperAdminWorkComponent } from './test-paper-admin-work.component';

describe('TestPaperAdminWorkComponent', () => {
  let component: TestPaperAdminWorkComponent;
  let fixture: ComponentFixture<TestPaperAdminWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPaperAdminWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPaperAdminWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
