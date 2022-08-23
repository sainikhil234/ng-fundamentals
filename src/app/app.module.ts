import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListResolver } from './events/events-list-resolver.service';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './events/nav/navbar.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { EventService } from './events/shared/event.service';
import { AuthService } from './user/auth.service';
import { ProfileComponent } from './user/profile.component';
import {HttpClientModule} from '@angular/common/http'
import { EventsResolver } from './events/event-resolver.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './events/create-event.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,
    SessionListComponent,
    DurationPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    EventService,
    EventRouteActivator,
    AuthService,
    EventsResolver,
    {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
    },EventsListResolver  
    
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}