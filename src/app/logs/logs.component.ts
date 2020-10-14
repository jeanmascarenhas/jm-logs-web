import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogsService } from './../logs/logs.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs2: Observable<any>;

  logs: any[];
  statusRequest: boolean = false;
  dataTable: any;
  filterSearch: string;
  searchText: string;
  searchType: string;
  statusError: Boolean = false;
  messageError: string;

  constructor(
    private logsService: LogsService,
    private chRef: ChangeDetectorRef,
    private router: Router) {
    this.getLogs();
  }

  ngOnInit(): void {
  }

  getLogs() {
    this.statusRequest = false;
    this.logsService.getAll().subscribe(value => {
      this.logs = value;
      this.statusRequest = true;
      this.chRef.detectChanges();
    },
      error => {
        console.log("Request error: ", error);
        this.messageError = "Request error: ", error.error.message;
        this.statusError = true;
      }
    );
  }

  redirect(route) {
    this.router.navigate([route]);
  }

  search() {
    this.statusRequest = false;
    this.logsService.getByFilter(this.searchType, this.searchText).subscribe(value => {
      this.logs = value;
      this.statusRequest = true;
      this.chRef.detectChanges();
    },
      error => {
        console.log("Request error: ", error);
        this.messageError = "Request error: ", error.error.message;
        this.statusError = true;
      }
    );
  }

}
