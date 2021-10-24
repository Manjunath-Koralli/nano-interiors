import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/models/file-upload';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent implements OnInit {

  selectedFiles!: FileList | undefined;
  currentFileUpload!: FileUpload;
  percentage: number | undefined;
  fileUploads!: any[];
  feedbackForm!: FormGroup;

  constructor(private uploadService: FileUploadService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name : [''],
      location : [''],
      feedback : [''],
    });

    this.uploadService.getFiles().snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      console.log(this.fileUploads)
    });
  }

  selectFile(event : any): void {
    this.selectedFiles = event.target.files;
  }

  upload(value: any): void {
    console.log(value)
    const file = this.selectedFiles?.item(0) as File;
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(value.name,value.location,"5",value.feedback,file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = percentage;
      },
      error => {
        console.log(error);
      }
    );
  }

}
