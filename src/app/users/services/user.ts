import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Service()
export class UserService {

    private readonly api = 'http://localhost:8080/api/v1/users';

    private http: HttpClient = inject(HttpClient);

    getUsers(): Observable<any> {
      return this.http.get(this.api);
    }

    getUserById(id: number): Observable<any> {
      return this.http.get(`${this.api}/${id}`);
    }

    createUser(user: User): Observable<any> {
      return this.http.post(this.api, user);
    }

    updateUser(user: User): Observable<any> {
      return this.http.put(`${this.api}/${user.id}`, user);
    }

    deleteUser(id: number): Observable<any> {
      return this.http.delete(`${this.api}/${id}`)
    }
}
