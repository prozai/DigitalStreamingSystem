import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin.model';
import { LogIn } from '../model/LogIn';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateAdminService {
  constructor(private httpClient: HttpClient) { }
  baseUrl: string = "http://localhost:8080/api/admin";

  // login admin with loginId and password
  authenticateAdmin(loginId: string, password: string) {
    return this.httpClient.get<Boolean>(this.baseUrl + "/" + loginId + "/" + password);
  }
  //  register admin
  signUp(admin: Admin) {
    return this.httpClient.post<Admin>(this.baseUrl, admin);
  }
}
