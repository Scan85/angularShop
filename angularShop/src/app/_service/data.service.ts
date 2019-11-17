import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Shop } from '../_interface/shop';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl = 'http://localhost:3000';
  public $products: Observable<Shop[]>;

  constructor(
    private _http: HttpClient
  ) {
    this.getGlobalData();
  }

  public getGlobalData(): void {
    this.$products = this.getProducts();
  }

  //GET
  public getProducts(): Observable<Shop[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get<Shop[]>(`${this.serverUrl}/products`, httpOptions).pipe(
      tap(results => {
        results.sort((a,b) => a.description.localeCompare(b.description));
      })
    );
  }

  //POST
  public createProducts(object: Shop): Observable<Shop> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<Shop>(`${this.serverUrl}/products`, object, httpOptions);
  }

  //PUT
  public changeProducts(object: Shop): Observable<Shop> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.put<Shop>(`${this.serverUrl}/products/${object.id}`, object, httpOptions);
  }

  //DELETE
  public deleteProduct(object: Shop): Observable<Shop> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.delete<Shop>(`${this.serverUrl}/products/${object.id}`, httpOptions);
  }
}
