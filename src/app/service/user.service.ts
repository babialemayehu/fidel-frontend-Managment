import { Injectable } from '@angular/core';
import { User } from '../model/user.model'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  private root = "http://clinic/api/json/"; 

  register(user: User): Observable<User>{
    const URL = this.root + "post/user/register"; 
    return this._http.post<User>(URL, user); 
  }

  getByRole($role: number): Observable<User[]>{
    const URL = this.root + "get/user/by role/"+$role; 
    return this._http.get<User[]>(URL); 
  }
}
