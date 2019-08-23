import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  postFile(imageData) {
    const endpoint = 'http://localhost:61692/api/Images';
    return this.http.post(endpoint, imageData);

  }
}
