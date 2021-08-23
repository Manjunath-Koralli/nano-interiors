import { Component, OnInit } from '@angular/core';
import { ClientNameService } from 'src/app/common/client-name.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  clientName : string = '';
  images: string[] = [];
  constructor(private nameService : ClientNameService) { }

  
  ngOnInit(): void {
    this.clientName = this.nameService.getClientName();
    if(this.clientName == 'jayanti') {
      this.images = [
        "assets/images/final-images/premium/jayanti/j1.JPG",
        "assets/images/final-images/premium/jayanti/j2.jpg",
        "assets/images/final-images/premium/jayanti/j3.jpg",
        "assets/images/final-images/premium/jayanti/j4.jpg",
        "assets/images/final-images/premium/jayanti/j5.jpg",
        "assets/images/final-images/premium/jayanti/j6.jpg",
        "assets/images/final-images/premium/jayanti/j7.jpg",
        "assets/images/final-images/premium/jayanti/j8.jpg",
        "assets/images/final-images/premium/jayanti/j9.JPG",
        "assets/images/final-images/premium/jayanti/j10.jpg",
        "assets/images/final-images/premium/jayanti/j11.JPG",
        "assets/images/final-images/premium/jayanti/j12.jpg",
        "assets/images/final-images/premium/jayanti/j13.jpg",
        "assets/images/final-images/premium/jayanti/j14.jpg",
      ]
    }
    else if(this.clientName == 'pratik') {
      this.images = [
        "assets/images/final-images/premium/jayanti/j1.JPG",
        "assets/images/final-images/premium/jayanti/j2.jpg",
        "assets/images/final-images/premium/jayanti/j3.jpg",
        "assets/images/final-images/premium/jayanti/j4.jpg",
        "assets/images/final-images/premium/jayanti/j5.jpg",
        "assets/images/final-images/premium/jayanti/j6.jpg",
        "assets/images/final-images/premium/jayanti/j7.jpg",
        "assets/images/final-images/premium/jayanti/j8.jpg",
        "assets/images/final-images/premium/jayanti/j9.JPG",
        "assets/images/final-images/premium/jayanti/j10.jpg",
        "assets/images/final-images/premium/jayanti/j11.JPG",
        "assets/images/final-images/premium/jayanti/j12.jpg",
      ]
    }
    
  }

  

}
