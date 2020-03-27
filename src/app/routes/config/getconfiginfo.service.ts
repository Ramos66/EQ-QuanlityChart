import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Procedure } from './procedure';

@Injectable({
  providedIn: 'root',
})
export class GetconfiginfoService {
  constructor(private http: HttpClient) {} 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private url = 'http://localhost:8080/getProcedureList';

  // 获取工序列表
  getProcedureList(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(this.url);
  }
}
