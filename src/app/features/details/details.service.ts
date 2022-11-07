import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { deleteDetail } from './details.actions';
import { DetailsItem } from './details.reducer';

export interface IFormData {
  name: string,
  status: 'todo' | 'in progress' | 'done'
}

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  getAllDetails(auth_token: string | null, URL: string): Observable<DetailsItem[]> {


    return this.http.get(URL, {
      headers: {
        "Authorization": `Bearer ${auth_token}`
      }
    }) as Observable<DetailsItem[]>
  }

  addNewDetail(auth_token: string | null, URL: string, data: IFormData) {
    return this.http.post(
      URL,
      data,
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    ) as Observable<DetailsItem>
  }

  deleteDetail(auth_token: string | null, URL: string): Observable<DetailsItem> {
    return this.http.delete(
      URL,
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    ) as Observable<DetailsItem>;
  }
}
