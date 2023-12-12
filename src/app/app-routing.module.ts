import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'update-event/:id', component: UpdateEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
