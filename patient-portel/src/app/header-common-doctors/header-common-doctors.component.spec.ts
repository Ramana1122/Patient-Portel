import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCommonDoctorsComponent } from './header-common-doctors.component';

describe('HeaderCommonDoctorsComponent', () => {
  let component: HeaderCommonDoctorsComponent;
  let fixture: ComponentFixture<HeaderCommonDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCommonDoctorsComponent]
    });
    fixture = TestBed.createComponent(HeaderCommonDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
