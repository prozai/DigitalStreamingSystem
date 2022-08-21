import { HttpClient } from '@angular/common/http';
import { Admin } from './../model/admin.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl: string = 'http://localhost:8080/api/admin';
  // baseUrl: string = 'http://localhost:3000/admin';
  constructor(private httpClient: HttpClient) { }


  createAdmin(admin: Admin) {
    // post : create a new admin record
    return this.httpClient.post(this.baseUrl, admin);
  }
  // get Admin By Id 
  getAdminById(id: number) {
    return this.httpClient.get(this.baseUrl + '/' + id);
  }
}
