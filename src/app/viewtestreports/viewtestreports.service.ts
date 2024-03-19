import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testreport } from './testreport';

@Injectable({
  providedIn: 'root'
})
export class ViewtestreportsService {
  url: string = '/api' ;  //  "http://localhost:5678/dietician"
   
  constructor( private httpClient: HttpClient ) { }

  getTestReports(patientId?: number): Observable<Testreport[]>{
      console.log("In ViewtestreportsService service ");
      console.log( patientId );
      return this.httpClient.get<Testreport[]>(this.url + "/patient/testReports/" + patientId ); 
  }
  getViewPdf(fileId?:any){
    
    const header = new HttpHeaders({'Content-Type':'',observe:'response',responseType:'blob' });                         
    return this.httpClient.get<Blob>(this.url + "/patient/testReports/viewFile/" + fileId,{headers:header, responseType: 'blob' as 'json'});
  }
  
}
