import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FilesService {

  constructor(private http: HttpClient) { }
  upload(file: File) {
    const formData: FormData = new FormData();
    formData.append('avatar', file, file.name);
    return this.http.post('/api/UploadImage', formData);
  }
}
