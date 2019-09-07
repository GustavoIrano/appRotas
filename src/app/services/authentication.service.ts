import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(data: any) {
    return this.http.post('http://localhost:3000/accounts/authenticate', data);
  }

  newRegister(data: any) {
    return this.http.post("http://localhost:3000/register", data);
  }
}
