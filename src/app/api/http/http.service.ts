import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public get<T>(url: string, path: string, params?: HttpParams) {
    return this.http.get<T>(this.baseUrl + url, {
      params,
      headers: {
        path: path,
      },
    });
  }

  public post<T>(url: string, data: any, path: string) {
    return this.http.post<T>(this.baseUrl + url, data, {
      headers: {
        path: path,
      },
    });
  }

  public put<T>(url: string, data: any, path: string) {
    return this.http.put<T>(this.baseUrl + url, data, {
      headers: {
        path: path,
      },
    });
  }

  public delete<T>(url: string, path: string) {
    return this.http.delete(this.baseUrl + url, {
      headers: {
        path: path,
      },
    });
  }
}
