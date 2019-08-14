import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  formData: Users;
  readonly rootUrl = 'http://localhost:61692/api';
  list: Users[];

  constructor(private http: HttpClient) { }

  postUser(formData: Users) {
    return this.http.post(this.rootUrl + '/Users', formData);

  }

  putUser(formData: Users) {
    //this.http.put(this.rootUrl + '/ContactDetails/' + sessionStorage.getItem('Id'), formData.contactDetails[0]);
    return this.http.put(this.rootUrl + '/Users/' + formData.name, formData);
  }

  deleteUser(formData: Users) {
    return this.http.delete(this.rootUrl + '/Users/' + formData);
  }

  refreshList() {
    this.http.get(this.rootUrl + '/Users')
    .toPromise()
      .then(res =>
      {
        this.list = res as Users[];
        sessionStorage.setItem('UsersList', JSON.stringify(res));
      }
      )
  }
}
