import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demande } from '../Models/demande';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DemandeService {
 
  private baseURL = "http://localhost:8000/demande";

  constructor(private http: HttpClient) { }


  public adddm(demande: Demande): Observable<Demande> {
    return this.http.post<Demande>(`${this.baseURL}/add`, demande, httpOptions);
  }

  public getmyDMs(): Observable<Demande[]>{
    return this.http.get<any>(`${this.baseURL}/myall`);
  }
  
  public getDMs(): Observable<Demande[]>{
    return this.http.get<any>(`${this.baseURL}/all`);
  }
  
  public updateDM(id: number,demande: Demande): Observable<Demande> {
    return this.http.put<Demande>(`${this.baseURL}/update/${id}`, demande);
  }
  getDMById(id: number): Observable<Demande>{
    return this.http.get<Demande>(`${this.baseURL}/find/${id}`);
  }
  public deleteDM(demanderefsw: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/delete/${demanderefsw}`);
  }


}
