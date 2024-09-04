import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private apiUrl = `${environment.baseurl}/patients`;

  constructor(private http: HttpClient) { }

  addPatient(patientData: any): Observable<any> {
    return this.http.post(this.apiUrl, patientData);
  }
}
