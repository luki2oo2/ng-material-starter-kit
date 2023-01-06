import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListProductModel } from '../models/list-product.model';

@Injectable({ providedIn: 'root' })
export class ListProductService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ListProductModel[]> {
    return this._httpClient.get<ListProductModel[]>(
      'https://fakestoreapi.com/products'
    );
  }
}
