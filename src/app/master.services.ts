import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class masterservice {
  constructor(private http: HttpClient) {}

  public requestmultipleapi(): Observable<any[]> {

    let requesturlone= 'https://dummyjson.com/products/1';
    let requesturltwo= 'https://dummyjson.com/products/2';
    let requesturlthree= 'https://dummyjson.com/products/3';
    let request1= this.http.get(requesturlone);
    let request2= this.http.get(requesturltwo);
    let request3= this.http.get(requesturlthree);

    return forkJoin([request1, request2, request3])
  }
}
