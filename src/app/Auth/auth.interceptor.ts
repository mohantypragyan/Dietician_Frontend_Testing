import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router:Router){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(authReq) .pipe(
        catchError((error:any)=>{
          if(error instanceof HttpErrorResponse){
            console.log(error.status);
            if(error.status===401){
              this.router.navigate(['/login'])
            }
          }
          return throwError(()=>new Error("Some other error occured"));
        })
      );
  }
}