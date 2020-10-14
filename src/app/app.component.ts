import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jm-logs-web';

  constructor(
    private router: Router) {
  }

  redirect(string){
    let route = '/' + string
    this.router.navigate([route]); 
  }
}
