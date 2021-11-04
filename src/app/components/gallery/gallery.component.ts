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
        "assets/images/final-images/premium/jayanti/p1.JPG",
        "assets/images/final-images/premium/jayanti/p2.jpg",
        "assets/images/final-images/premium/jayanti/p3.jpg",
        "assets/images/final-images/premium/jayanti/p4.jpg",
        "assets/images/final-images/premium/jayanti/p5.jpg",
        "assets/images/final-images/premium/jayanti/p6.jpg",
        "assets/images/final-images/premium/jayanti/p7.jpg",
        "assets/images/final-images/premium/jayanti/p8.jpg",
        "assets/images/final-images/premium/jayanti/p9.JPG",
        "assets/images/final-images/premium/jayanti/p10.JPG",
        "assets/images/final-images/premium/jayanti/p11.JPG",
        "assets/images/final-images/premium/jayanti/p12.JPG",
        "assets/images/final-images/premium/jayanti/p13.jpg",
        "assets/images/final-images/premium/jayanti/p14.jpg"
      ]
    }
    else if(this.clientName == 'prathik') {
      this.images = [
        "assets/images/final-images/premium/prathik/p1.jpg",
        "assets/images/final-images/premium/prathik/p2.jpg",
        "assets/images/final-images/premium/prathik/p3.jpg",
        "assets/images/final-images/premium/prathik/p4.jpg",
        "assets/images/final-images/premium/prathik/p5.jpg",
        "assets/images/final-images/premium/prathik/p6.jpg",
        "assets/images/final-images/premium/prathik/p7.jpg",
        "assets/images/final-images/premium/prathik/p8.jpg",
        "assets/images/final-images/premium/prathik/p9.jpg",
        "assets/images/final-images/premium/prathik/p10.jpg",
        "assets/images/final-images/premium/prathik/p11.jpg",
        "assets/images/final-images/premium/prathik/p12.jpg",
        "assets/images/final-images/premium/prathik/p13.jpg",
        "assets/images/final-images/premium/prathik/p14.jpg",
        "assets/images/final-images/premium/prathik/p15.jpg",
        "assets/images/final-images/premium/prathik/p16.jpg",
        "assets/images/final-images/premium/prathik/p17.jpeg",
        "assets/images/final-images/premium/prathik/p18.jpeg",
        
      ]
    }
    else if(this.clientName == 'subramanyam') {
      this.images = [
        "assets/images/final-images/budget/subramanyam/p1.jpeg",
        "assets/images/final-images/budget/subramanyam/p2.jpeg",
        "assets/images/final-images/budget/subramanyam/p3.jpeg",
        "assets/images/final-images/budget/subramanyam/p4.jpeg",
        "assets/images/final-images/budget/subramanyam/p5.jpeg",
        "assets/images/final-images/budget/subramanyam/p6.jpeg",
        "assets/images/final-images/budget/subramanyam/p7.jpeg"
        
      ]
    }
    
  }

  

}
