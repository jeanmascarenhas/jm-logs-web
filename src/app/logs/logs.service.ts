import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Log } from './log';


const apiLog = 'api/v1/logs';

@Injectable({ providedIn: 'root' })

export class LogsService {
    constructor(
        private router: Router,
        private http: HttpClient) { }

    
    getAll(): Observable<any> {
        return this.http.get<any[]>(apiLog, { withCredentials: true })
    }

    getById(id): Observable<any> {        
        return this.http.get<any[]>(apiLog + "/" + id);
    }

    getByFilter(filter, value){
        return this.http.get<any[]>(apiLog + "/" + filter +"?" + filter + "=" + value);
    }

    post(log: Log){
        return this.http.post(apiLog, log);
    }

    put(log: Log){
        return this.http.put(apiLog + "/" + log.id, log);
    }

    delete(id){
        return this.http.delete(apiLog + "/" + id);
    }

    upload(formData){
        console.log(formData);
        
        return this.http.post(apiLog + "/upload", formData);      
    }
}