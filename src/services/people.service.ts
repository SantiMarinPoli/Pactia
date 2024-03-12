import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';
import { People } from 'src/models/people';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  apiUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    // Accede a la variable apiUrl definida en environment.ts
    this.apiUrl = environment.apiUrl;

    /*const authToken = this.authService.getToken(); // Obtener el token desde AuthService
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });*/
  }

  get():Observable<People[]>{
    const authToken = this.authService.getToken(); // Obtener el token desde AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    //if (authToken) {

      return this.http.get<People[]>(this.apiUrl + "/People/ListPeople", {headers});
    //}
  }

  getByDni(dni: string):Observable<People>{
    const authToken = this.authService.getToken(); // Obtener el token desde AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    const url = `${this.apiUrl}/People/PeopleById/${dni}`;
    return this.http.get<People>(url, {headers})
  }

  post(people: People): Observable<People>{
    const authToken = this.authService.getToken(); // Obtener el token desde AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.post<People>(this.apiUrl + "/People", people,{headers});
  }

  update(people: People, guiid:string | undefined): Observable<People>{
    const authToken = this.authService.getToken(); // Obtener el token desde AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.put<People>(this.apiUrl + "/People", people, {headers});
  }

  delete(guiid:string): Observable<People>{
    const authToken = this.authService.getToken(); // Obtener el token desde AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.delete<People>(`${this.apiUrl + "/People/"}${guiid}`, {headers});
  }
}
