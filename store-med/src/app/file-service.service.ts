import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileServiceService {
  file: File = null;
  constructor() {}

  setFile(file: File) {
    this.file = file;
  }

  getFile(file: File) {
    return this.file;
  }
}
