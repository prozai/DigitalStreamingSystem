import { Actors } from './../model/actors.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  baseUrl: string = 'http://localhost:8080/api/actor'
  // Performs HTTP requests.
  constructor(private httpClient: HttpClient) { }
  // get actors all record
  getActors() {
    return this.httpClient.get<Actors[]>(this.baseUrl);
  }
  // get get Actor By Id
  getActorById(id: number) {
    return this.httpClient.get<Actors>(this.baseUrl + "/" + id);
  }
  // post : create a new actor record
  createActor(actor: Actors) {
    return this.httpClient.post(this.baseUrl, actor);
  }
  // update an actor record
  updateActor(id: number, actor: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, actor);
  }
  // delete actor
  deleteActor(id: number) {
    return this.httpClient.delete<Actors>(this.baseUrl + "/" + id);
  }
  uploadActorProfilePic(file: File) {
    // this.httpClient.headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post("http://localhost:8080/api/actor/thumbnail",file);
  }
}