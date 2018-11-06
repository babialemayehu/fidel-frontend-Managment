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
  update(id: number, user: User): Observable<User> {
    const URL = this.root + 'update/user/'+id; 
    return this._http.put<User>(URL, user); 
  }

  delete(id: number): Observable<User>{
    const URL = this.root + 'delte/user/'+id; 
    return this._http.delete<User>(URL); 
  }

  reset(id: number): Observable<User>{
    const URL = this.root + 'update/user/password/reset/'+id; 
    return this._http.put<User>(URL, {}); 
  }

  idExist(regId: string): Observable<boolean>{
    const URL = this.root + 'get/user/validate/regId exist/'+regId; 
    return this._http.get<boolean>(URL); 
  }

  phoneExist(phone: string): Observable<boolean>{
    const URL = this.root + 'get/user/validate/phone exist/'+phone; 
    return this._http.get<boolean>(URL); 
  }

  emailExist(email: string): Observable<boolean>{
    const URL = this.root + 'get/user/validate/email exist/'+email; 
    return this._http.get<boolean>(URL); 
  }
}
