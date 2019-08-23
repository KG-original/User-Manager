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
        //Convert all images to base64
        //for (var i = 0; i < this.list.image.length; i++) {
        //var bytes = this.list.image[i].imageContent; // get from server
        //var uints = new UInt8Array(bytes);
        //var base64 = btoa(String.fromCharCode(null, uints));
        //this.list.image[i].imageContent = 'data:image/jpeg;base64,' + base64; //
        //}
        sessionStorage.setItem('UsersList', JSON.stringify(res));
      }
      )
  }
}
