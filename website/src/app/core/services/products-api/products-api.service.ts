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
    .set('Authorization', 'Token 433f402b36eed37626d23d99548048d0ef9a3d06')
    .set('X-RapidAPI-Key', '64fc35c9e3msh108898cae148962p1f396ajsn6d67a3421b3e')
    .set('X-RapidAPI-Host', 'cannabis-recipes.p.rapidapi.com')
    .set('Access-Control-Allow-Origin', '*');
    // return this.http.get<ProductI[]>(`${API_URL}/albums`)
    return this.http.get<ProductI[]>(
      `https://cannabis-recipes.p.rapidapi.com/recipes/`,
      { 'headers': headers })

  }
}
