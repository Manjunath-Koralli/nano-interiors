import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/models/file-upload';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from 'src/app/validators/form-validators';
import { Router } from '@angular/router';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent implements OnInit,Validators {

  selectedFiles!: FileList | undefined;
  currentFileUpload!: FileUpload;
  percentage: number | undefined;
  fileUploads!: any[];
  feedbackForm!: FormGroup;
  private submissionContactForm!: AngularFirestoreCollection<any>;

  constructor(
    private uploadService: FileUploadService,
    private fb: FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({      
      name : new FormControl('' , [Validators.required,Validators.minLength(3),FormValidators.notOnlyWhitespace]),
      location : new FormControl('' , [Validators.required,FormValidators.notOnlyWhitespace]),
      feedback : new FormControl('' , [Validators.required,FormValidators.notOnlyWhitespace]),
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

  file!: File;
  fileTrue : boolean = false;
  selectFile(event : any): void {
    this.selectedFiles = event.target.files;
    this.file = this.selectedFiles?.item(0) as File;
    this.fileTrue = true;
    console.log(this.file)
  }

  upload(value: any): void {
    console.log(value)
    const file = this.selectedFiles?.item(0) as File;
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(value.name,value.location,"5",value.feedback,file);
      this.submissionContactForm.add(value).then(res => {
        console.log(res);
        alert("Successfully submitted")
      }).catch(err => console.log(err)
      ).finally(() => {
        
      });
    // this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
    //   percentage => {
    //     this.percentage = percentage;
    //     if(this.percentage == 100) {
    //       console.log(this.percentage)
    //       alert("Feedback Submitted succesfully");
    //       this.router.navigateByUrl("/home")
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  get name(){ return this.feedbackForm.get('name'); }
  get location(){ return this.feedbackForm.get('location'); }
  get feedback(){ return this.feedbackForm.get('feedback'); }

}
