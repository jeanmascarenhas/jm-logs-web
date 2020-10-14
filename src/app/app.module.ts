import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LogsService } from '../app/logs/logs.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { EditLogComponent } from './logs/edit-log/edit-log.component';
import { NewLogComponent } from './logs/new-log/new-log.component';
import { LogsModule } from './logs/logs.module';
import { NavComponent } from './share/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './logs/upload/upload.component';



@NgModule({
  declarations: [
    AppComponent,
    EditLogComponent,
    NewLogComponent,
    LogsComponent,
    NavComponent,
    HomeComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    LogsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
