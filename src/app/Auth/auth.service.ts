import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private router: Router, private http: HttpClient) { }
  
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        this.router.navigate(['/login']);
    }
  }

  canAuthenticate(){
    if (this.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }
  
  
  storeToken(token:string, roles:String[]){
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('roles', roles.toString());
  }

  login(userLoginEmail: string, password: string): Observable<any>{
    let url: string = '/api' + '/login';  // "http://localhost:5678/dietician/login"; 
    return this.http.post(url, { userLoginEmail, password });
  }

  removeToken(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('roles');
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('roles');
    this.router.navigate(['/login']);
  }
}
