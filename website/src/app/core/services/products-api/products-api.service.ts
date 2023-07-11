import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from '../../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  constructor(
    private http : HttpClient
  ) {}

  public getProducts(): Observable<ProductI[]>{
    const headers= new HttpHeaders()
    .set('X-RapidAPI-Key', '64fc35c9e3msh108898cae148962p1f396ajsn6d67a3421b3e')
    .set('X-RapidAPI-Host', 'pizza-and-desserts.p.rapidapi.com')
    .set('Access-Control-Allow-Origin', '*');
    // return this.http.get<ProductI[]>(`${API_URL}/albums`)
    return this.http.get<ProductI[]>(
      `https://pizza-and-desserts.p.rapidapi.com/desserts`,
      { 'headers': headers })

  }
}
