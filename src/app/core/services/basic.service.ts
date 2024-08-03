import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviorment } from '../enviorment/enviorment';
import { serverRoutes } from '../constants/common.routes';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private http: HttpClient) { }

  getPosts(): any {
    return this.http.get<any>(enviorment.serverEndpoint + serverRoutes.baseCheck);
  }
}
