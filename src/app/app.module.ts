import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { AttestationComponent } from './attestation/attestation.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { JournalComponent } from './journal/journal.component';
import { UmkdComponent } from './umkd/umkd.component';
import { HttpClientModule }   from '@angular/common/http';
import { HttpService } from './service/http.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegisterComponent,
    AuthComponent,
    MainComponent,
    ProfileComponent,
    AttestationComponent,
    SchedulerComponent,
    SyllabusComponent,
    JournalComponent,
    UmkdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
