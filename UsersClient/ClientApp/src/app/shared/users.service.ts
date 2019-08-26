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
  isLoading: boolean = true;

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
      .subscribe(
      res => {
        this.list = res as Users[];
        this.isLoading = false;
        var userNamesSession = [];
        for (var i = 0; i < this.list.length; i++) {
          userNamesSession.push(this.list[i].name)
        }
        sessionStorage.setItem('UsersList', JSON.stringify(userNamesSession));
        console.log('success', res);
        console.log('success', userNamesSession);
      },
      error => {
        console.log('oops', error)
      }
      )};
}
