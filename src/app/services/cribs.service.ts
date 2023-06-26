import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CribsService {
  public newCribSubject = new Subject<any>();
  constructor(private httpClient: HttpClient) {}

  getAllCribs() {
    return this.httpClient.get('data/cribs.json').pipe(map((res) => res));
  }

  addCrib(data: any) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}
