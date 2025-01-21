import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoctorPatientviewComponent } from './search-doctor-patientview.component';

describe('SearchDoctorPatientviewComponent', () => {
  let component: SearchDoctorPatientviewComponent;
  let fixture: ComponentFixture<SearchDoctorPatientviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDoctorPatientviewComponent]
    });
    fixture = TestBed.createComponent(SearchDoctorPatientviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
