import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Log } from '../log';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent implements OnInit {

  form: FormGroup;
  log: Log;
  subscription: Subscription;
  id: string;
  submitted: Boolean = null;
  status: boolean = false;
  messageReturn: string = null;
    constructor(
    private logsService: LogsService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      id: [''],
      date: ['', Validators.required],
      ip: [''],
      request: [''],
      status: [''],
      userAgent: ['']
    });
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params["id"];
    });
    
    this.getLog();
  }

  getLog() {
    this.logsService.getById(this.id).subscribe(value => {
      this.log = value;
      this.form = this.formBuilder.group({
        id: [this.log.id],
        date: [this.log.date],
        ip: [this.log.ip],
        request: [this.log.request],
        status: [this.log.status],
        userAgent: [this.log.userAgent]
      });
    },
      error => console.log("Request error: ", error)
    );
  }

  postLog(log: Log) {
    this.logsService.put(log).subscribe(
      value => {
        this.status = true;
        this.messageReturn = "Log updated."
        setTimeout(() => { this.status = false; this.redirect() }, 4000);
      },
      error => {
        if (this.log.date == '') {
          console.log('Error creating log: ', error);
        }
      }
    );
  }

  delete(){
    this.logsService.delete(this.log.id).subscribe(
      value => {
        this.status = true;
        this.messageReturn = "Log deleted."
        setTimeout(() => { this.status = false; this.redirect() }, 4000);
      },
      error => {
        if (this.log.date == '') {
          console.log('Error delete log: ', error);
        }
      }
    );
  }

  submitForm() {
    this.log.date = this.form.get('date').value;
    this.log.ip = this.form.get('ip').value;
    this.log.request = this.form.get('request').value;
    this.log.status = this.form.get('status').value;
    this.log.userAgent = this.form.get('userAgent').value;

    this.postLog(this.log);
  }

  redirect() {
    this.router.navigate(['/logs']);
  }
}