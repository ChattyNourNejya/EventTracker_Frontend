import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  constructor(private eventService: EventsService, private router: Router) {}

  ngOnInit(): void {
    this.getEvents();
  }
  private getEvents() {
    this.eventService.getEventsList().subscribe(
      (data: Event[]) => {
        console.log(data);
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  updateEvent(id: number) {
    this.router.navigate(['update-event', id]);
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe((data) => {
      console.log(data);
      this.getEvents();
    });
  }
}
