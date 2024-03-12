import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string;
  private authToken: string |null | undefined = null;

  constructor(private http: HttpClient) {
    // Accede a la variable apiUrl definida en environment.ts
    this.apiUrl = environment.apiUrl;
  }

  post(): Observable<Auth> {
    return this.http.post<Auth>(`${this.apiUrl}/Authentication/GenerateToken`, null).pipe(
      retry(2), // Reintentar la solicitud HTTP hasta 2 veces en caso de error
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Ocurrió un error al generar el token.'); // Manejar el error y lanzar un nuevo error
      })
    );
  }

  saveToken(token: string | undefined): void {
    this.authToken = token;
    //localStorage.setItem('authToken', token); // Almacenar el token en el almacenamiento local
  }

  getToken():  string | null {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('authToken');
    }
    return this.authToken;
  }


}
