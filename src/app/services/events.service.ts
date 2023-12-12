import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private baseURL = 'http://localhost:8080/api/v1/events';

  constructor(private httpClient: HttpClient) {}

  getEventsList(): Observable<any> {
    return this.httpClient.get<Event[]>(`${this.baseURL}/all`);
  }

  creatEvent(event: Event): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/creatEvent`, event);
  }

  deleteEvent(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
