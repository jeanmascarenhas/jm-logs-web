import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsService } from './logs.service'
import { LogsComponent } from './logs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'logs', component:  LogsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  providers: [
    LogsService
  ]
})
export class LogsModule { }
