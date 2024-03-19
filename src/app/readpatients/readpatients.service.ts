import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
@Injectable({
  providedIn: 'root'
})
export class ReadpatientsService {
  url: string ='/api'; // "http://localhost:5678/dietician"; 

  constructor( private httpClient: HttpClient ) { }

  
  getPatients(): Observable<Patient[]> {
    console.log("In service ");
      return this.httpClient.get<Patient[]>(this.url + "/patient"); 
  } 

  deletePatient(patient:Patient):Observable<any>{
    console.log("Deleted");
    return this.httpClient.delete(this.url+"/patient/"+patient.patientId,{responseType: 'text'});
    }

   
  }


