import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  form: FormGroup;
  status: Boolean;
  message: string;
  statusError: Boolean;
  messageError: string;
  modal: Boolean = true;

  constructor(private logService: LogsService, private router: Router) {
    this.form = new FormGroup({
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        fileSource: file
      });
    }
  }

  submit() {
    const formData = new FormData();
    console.log(this.form.get('fileSource').value);
    formData.append('file', this.form.get('fileSource').value);

    this.logService.upload(formData).subscribe(
      value => {
        this.message = "Upload success.";
        this.status = true;
        this.modal = false;
      },
      error => {
        this.modal = false;
        this.statusError = true;        
        this.messageError = "Can not upload file: " + error.error.message;        
        this.statusError = true;
      }
    );
  }
  
  closeModal(){
    this.modal = true;
  }

  redirect() {
    this.router.navigate(['/logs']);
    console.log("/logs");
  }
}
