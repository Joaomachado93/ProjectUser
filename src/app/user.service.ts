import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpResponse } from '@angular/common/http';
import { UserInformation } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  //get elements in API
  public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', 1);
    queryParams = queryParams.append('per_page', 20);    
    return this.http.get<UserInformation>(url, { params: queryParams });
    Pipe(

      catchError((e)=>{
        //console.log(e)
        return throwError(e);
      })
    )
  }
  getUserDetails(){

  }
}
