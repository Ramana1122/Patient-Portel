import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboardHeaderComponent } from './patient-dashboard-header.component';

describe('PatientDashboardHeaderComponent', () => {
  let component: PatientDashboardHeaderComponent;
  let fixture: ComponentFixture<PatientDashboardHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDashboardHeaderComponent]
    });
    fixture = TestBed.createComponent(PatientDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
