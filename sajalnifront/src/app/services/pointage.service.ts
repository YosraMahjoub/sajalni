import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from '../Models/demande';
import { Dossier } from '../Models/dossier';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PointageService {
  private baseURL = "http://localhost:8000/pointage";

  constructor(private http: HttpClient) { }

  public getDoss(): Observable<Dossier[]>{
    return this.http.get<any>(`${this.baseURL}/alldos`);
  }

  public getDMs(): Observable<Demande[]>{
    return this.http.get<any>(`${this.baseURL}/alldem`);
  }

  accepter(iddos: number, iddemacc: number, refbf:string): Observable<any> {
    return this.http.post(`${this.baseURL}/accepter`, {
      iddos,
      iddemacc,
      refbf
    }, httpOptions);
  }

  refuser(iddos: number, iddemref: number, refbf:string): Observable<any> {
    return this.http.post(`${this.baseURL}/refuser`, {
      iddos,
      iddemref,
      refbf
    }, httpOptions);
  }
}
