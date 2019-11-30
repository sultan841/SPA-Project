import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { AttestationComponent } from './attestation/attestation.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { UmkdComponent } from './umkd/umkd.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [ 
  {path: 'register', component: RegisterComponent},
  {path: "auth", component: AuthComponent}
];
const mainRoutes: Routes = [
  {path: '', redirectTo: 'profile',  pathMatch: 'full'},
  {path: 'profile',component: ProfileComponent},
  {path: 'attestation', component: AttestationComponent},
  {path: 'scheduler', component: SchedulerComponent},
  {path: 'umkd', component: UmkdComponent},
  {path: 'syllabus', component: SyllabusComponent},
  {path: 'journal',component: JournalComponent}
]

const appRoutes: Routes = [
  {path: '', redirectTo: 'users',  pathMatch: 'full'},
  { path: 'users', component: UsersComponent,children: routes},
  {path: 'main', component: MainComponent, children: mainRoutes}
];

@NgModule({ 
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
