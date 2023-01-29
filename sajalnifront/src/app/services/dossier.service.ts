import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dossier } from '../Models/dossier';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DossierService {
  private baseURL = "http://localhost:8000/dossier";

  constructor(private http: HttpClient) { }

  public adddos(dossier: Dossier): Observable<Dossier> {
    return this.http.post<Dossier>(`${this.baseURL}/add`, dossier, httpOptions);
  }

  public getDoss(): Observable<Dossier[]>{
    return this.http.get<any>(`${this.baseURL}/all`);
  }

  public getmyDs(): Observable<Dossier[]>{
    return this.http.get<any>(`${this.baseURL}/myall`);
  }
  
  public updateDos(id: number,dossier: Dossier): Observable<Dossier> {
    return this.http.put<Dossier>(`${this.baseURL}/update/${id}`, dossier);
  }
  getDosById(id: number): Observable<Dossier>{
    return this.http.get<Dossier>(`${this.baseURL}/find/${id}`);
  }
  public deleteDos(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/delete/${id}`);
  }

}
