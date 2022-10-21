import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatValueService {

  constructor() { }

  date(dateStr: string) {
    return dateStr.substring(0,10);
  }
}
