import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectListService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<string[]> {
    return this._httpClient.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
