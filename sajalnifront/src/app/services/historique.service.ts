import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historique } from '../Models/historique';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  
  private baseURL = "http://localhost:8000/historique";

  constructor(private http: HttpClient) { }

  public getDoss(): Observable<Historique[]>{
    return this.http.get<any>(`${this.baseURL}/all`);
  }
}
