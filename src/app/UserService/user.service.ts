import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../readpatients/patient';
import { Observable, Subject, tap } from 'rxjs';


const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = '/api'; // "http://localhost:5678/dietician"; 
  private _refreshrequired=new Subject<void>();
  get Refreshrequired(){
   return this._refreshrequired;
  }

  constructor(private http: HttpClient) { }
  
  postPatient(formData : FormData):Observable<any>
  {
     return this.http.post<any>(this.url+ "/patient",formData).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
     );
  }

  getPatient()
  {
    return this.http.get<any>(this.url);
  }
  
  putPatient(patientId: number,formData:FormData): Observable<any> {
   
    return this.http.put<any>(`${this.url}/patient/${patientId}` ,formData).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
     );    
   
}




  
}
