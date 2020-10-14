import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditLogComponent } from './logs/edit-log/edit-log.component';
import { NewLogComponent } from './logs/new-log/new-log.component';
import { LogsComponent } from './logs/logs.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './logs/upload/upload.component';


const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'logs', component:  LogsComponent},
  { path: 'logs/new-log', component:  NewLogComponent},
  { path: 'logs/edit-log/:id', component:  EditLogComponent},
  { path: 'logs/upload', component:  UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
