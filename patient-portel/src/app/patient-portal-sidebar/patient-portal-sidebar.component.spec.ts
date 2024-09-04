import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPortalSidebarComponent } from './patient-portal-sidebar.component';

describe('PatientPortalSidebarComponent', () => {
  let component: PatientPortalSidebarComponent;
  let fixture: ComponentFixture<PatientPortalSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientPortalSidebarComponent]
    });
    fixture = TestBed.createComponent(PatientPortalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
