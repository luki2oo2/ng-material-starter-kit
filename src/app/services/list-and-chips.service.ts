import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListAndChipsModel } from '../models/list-and-chips.model';

@Injectable({ providedIn: 'root' })
export class ListAndChipsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ListAndChipsModel[]> {
    return this._httpClient.get<ListAndChipsModel[]>(
      'https://6384fca14ce192ac60696c4b.mockapi.io/influecers-with-followers'
    );
  }
}
