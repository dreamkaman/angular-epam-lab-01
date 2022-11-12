import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Status } from 'src/app/shared/tasks-list/tasks-list.service';
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

  patchDetailStatus(auth_token: string | null, URL: string, newStatus: Status): Observable<DetailsItem> {
    return this.http.patch(
      URL,
      { status: newStatus },
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    ) as Observable<DetailsItem>;
  }

  patchDetailName(auth_token: string | null, URL: string, newName: string): Observable<DetailsItem> {
    return this.http.patch(
      URL,
      { name: newName },
      {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      }
    ) as Observable<DetailsItem>;
  }

}
