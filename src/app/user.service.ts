import { Injectable } from '@angular/core';
import { user } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = 'http://localhost:8080/user';

  getUsers():Observable<user[]> {
    return this.http.get<user[]>(this.url);
  }

  getUserById(userId: number): Observable<user> {
    const getByIdUrl=`${this.url}/${userId}`;
    return this.http.get<user>(getByIdUrl);
  }

  updateUser(user:user):Observable<any> {
    return this.http.put(this.url, user)
  }

  deleteUser (us: user | number): Observable<user> {
    const id = typeof us === 'number' ? us : us.userId;
    const deleteurl = `${this.url}/${id}`;

    return this.http.delete<user>(deleteurl);
  }

  addUser(newUser:user) {
    //console.log(us.username);
    return this.http.post<user>(this.url,newUser);
  }
  constructor(private http:HttpClient) { }

}
