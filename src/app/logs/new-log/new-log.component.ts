import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogsService } from '../logs.service';
import { Log } from './../log';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.css']
})
export class NewLogComponent implements OnInit {

  form: FormGroup;
  log: Log;

  status: boolean = false;
  statusError: Boolean = false;
  messageReturn: string = null;

  constructor(private logsService: LogsService, private router: Router) {
    this.form = new FormGroup({
      date: new FormControl(),
      ip: new FormControl(),
      request: new FormControl(),
      status: new FormControl(),
      userAgent: new FormControl()
    });
  }
  ngOnInit(): void {
  }

  postLog() {
    this.log = {
      id: null,
      date: this.form.get('date').value,
      ip: this.form.get('ip').value,
      request: this.form.get('request').value,
      status: this.form.get('status').value,
      userAgent: this.form.get('userAgent').value
    };
    this.logsService.post(this.log).subscribe(
      value => {
        this.messageReturn = "Log created."
        this.status = true;
        setTimeout(() => { this.status = false }, 4000);
        this.redirect();
      },
      error => {
        this.messageReturn = error.error.message;        
        this.statusError = true;
        if (this.log.date == '') {
          console.log('Error creating log: ', error);
        }
      }
    );
  }

  submitForm() {
    this.postLog();
  }

  redirect() {
    this.router.navigate(['/logs']);
    console.log("/logs");
  }
}
