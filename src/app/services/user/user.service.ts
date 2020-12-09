import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://api.github.com/users';
  itemsPerPage = 4

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get(`${this.apiUrl}?per_page=${this.itemsPerPage}`);
  
  }
}
