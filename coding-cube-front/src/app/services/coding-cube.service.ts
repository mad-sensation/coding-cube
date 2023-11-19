import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CodingCubeService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient ) {}

  initializeCodingWord(codingWord: string): void {
    this.http.post(`${this.apiUrl}/initialize`, {codingWord}).subscribe();
  }

  encode(text: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/encode`, {text});
  }

  decode(text: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/decode`, {text});
  }
}
