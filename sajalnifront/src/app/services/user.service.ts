import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { Role } from '../Models/role';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8000";

  constructor(private http: HttpClient) { }
  
  public signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/auth/register`, user, httpOptions);
  }
  

  login(email: string, mdp: string): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/signin`, {
      email,
      mdp
    }, httpOptions);
  }

  public getUserList(): Observable<User[]>{
    return this.http.get<any>(`${this.baseURL}/user/all`);
  }

  public addUser(nom: string, email: string, mdp: string, roles: string): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/user/add`, {
      nom ,email,
      mdp, roles
    }, httpOptions);
  }

  public updateUser(id: number,user: User): Observable<User> {
    return this.http.put<User>(`${this.baseURL}/user/update/${id}`, user);
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/user/find/${id}`);
  }
  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/user/delete/${userId}`);
  }
}
 