import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env = environment;

  constructor(
    private httpClient: HttpClient
  ) {}

  getProductById(params: { id: string }) {
    return this.httpClient.get(this.env.apiUrl + 'api/products' , { params });
  }

  getAllProducts() {
    return this.httpClient.get(this.env.apiUrl + 'api/products');
  }
}