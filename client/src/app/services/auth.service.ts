import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthTokenResponse } from '../models/auth-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);
  isUserLoggedIn: Observable<boolean> = this.isUserLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {
    // First time called set the user status at the moment
    // this.token = localStorage.getItem('authToken');
    // this.updateLoggedStatus()
  }

  signUp(email: string, username: string, password: string, name: string): Observable<boolean> {
    const requestBody = {
      email: email,
      username: username,
      password: password,
      name: name
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      }),
    };
    return this.http.post<AuthTokenResponse>(`${this.apiUrl}/signup`, requestBody, httpOptions).pipe(
      map((response) => {
        const accessToken = response.data.accessToken;
        if (!!accessToken) {
          this.setToken(accessToken);
          this.setIsUserLoggedIn(true);
        }
        return !!accessToken;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

  signOut() {
    this.removeToken()
    this.setUserLoggedStatus(false);
    // this.router.navigate(['/signin'])
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  private setToken(token: string | null){
    if (!!token) {
      localStorage.setItem('accessToken', token);
    } else {
      localStorage.removeItem('accessToken');
    }
  }

  private removeToken(){
    localStorage.removeItem('authToken');
  }

  private setIsUserLoggedIn(newStatus: boolean): void {
    this.isUserLoggedInSubject.next(newStatus);
  }
}
