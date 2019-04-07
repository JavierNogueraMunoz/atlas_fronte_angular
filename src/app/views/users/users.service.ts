import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  
  public getUser(user: string): Observable<any> {
    return this.httpClient.get<any>(`${AppSettings.API_ENDPOINT_USER}/${user}`);
  }
  public addUser(user: any): Observable<any> {
    return this.httpClient.post<any>(AppSettings.API_ENDPOINT_USER, user);
  }
 
}