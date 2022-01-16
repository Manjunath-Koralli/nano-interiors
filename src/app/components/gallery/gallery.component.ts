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
    else if(this.clientName == 'avinash') {
      this.images = [
        "assets/images/final-images/premium/avinash/p1.jpeg",
        "assets/images/final-images/premium/avinash/p2.jpeg",
        "assets/images/final-images/premium/avinash/p3.jpeg",
        "assets/images/final-images/premium/avinash/p4.jpeg",
        "assets/images/final-images/premium/avinash/p5.jpeg",
        "assets/images/final-images/premium/avinash/p6.jpeg",
        "assets/images/final-images/premium/avinash/p7.jpeg",
        "assets/images/final-images/premium/avinash/p8.jpeg",
        "assets/images/final-images/premium/avinash/p9.jpeg",
        "assets/images/final-images/premium/avinash/p10.jpeg",
        "assets/images/final-images/premium/avinash/p11.jpeg",
        "assets/images/final-images/premium/avinash/p12.jpeg",
        "assets/images/final-images/premium/avinash/p13.jpeg",
        "assets/images/final-images/premium/avinash/p14.jpeg",
        "assets/images/final-images/premium/avinash/p15.jpeg",
        "assets/images/final-images/premium/avinash/p16.jpeg",
        "assets/images/final-images/premium/avinash/p17.jpeg",
        "assets/images/final-images/premium/avinash/p18.jpeg",
        "assets/images/final-images/premium/avinash/p19.jpeg",
        "assets/images/final-images/premium/avinash/p20.jpeg",
        "assets/images/final-images/premium/avinash/p21.jpeg",
        "assets/images/final-images/premium/avinash/p22.jpeg",
        "assets/images/final-images/premium/avinash/p23.jpeg",
        "assets/images/final-images/premium/avinash/p24.jpeg",
        "assets/images/final-images/premium/avinash/p25.jpeg",
        "assets/images/final-images/premium/avinash/p26.jpeg",
        "assets/images/final-images/premium/avinash/p27.jpeg",
        "assets/images/final-images/premium/avinash/p28.jpeg",
        "assets/images/final-images/premium/avinash/p29.jpeg",
        "assets/images/final-images/premium/avinash/p30.jpeg",
        "assets/images/final-images/premium/avinash/p31.jpeg",
        "assets/images/final-images/premium/avinash/p32.jpeg",
        "assets/images/final-images/premium/avinash/p33.jpeg",
        "assets/images/final-images/premium/avinash/p34.jpeg",
        "assets/images/final-images/premium/avinash/p35.jpeg",
        "assets/images/final-images/premium/avinash/p36.jpeg",
        "assets/images/final-images/premium/avinash/p37.jpeg",
        "assets/images/final-images/premium/avinash/p38.jpeg",
        "assets/images/final-images/premium/avinash/p39.jpeg",
        "assets/images/final-images/premium/avinash/p40.jpeg",
        "assets/images/final-images/premium/avinash/p41.jpeg",
        "assets/images/final-images/premium/avinash/p42.jpeg",
        "assets/images/final-images/premium/avinash/p43.jpeg",
        "assets/images/final-images/premium/avinash/p44.jpeg",
        "assets/images/final-images/premium/avinash/p45.jpeg",
        "assets/images/final-images/premium/avinash/p46.jpeg",
        "assets/images/final-images/premium/avinash/p47.jpeg",
        "assets/images/final-images/premium/avinash/p48.jpeg",
        "assets/images/final-images/premium/avinash/p49.jpeg",
        "assets/images/final-images/premium/avinash/p50.jpeg",
        "assets/images/final-images/premium/avinash/p51.jpeg",
        "assets/images/final-images/premium/avinash/p52.jpeg",
        "assets/images/final-images/premium/avinash/p53.jpeg",
        "assets/images/final-images/premium/avinash/p54.jpeg",
        "assets/images/final-images/premium/avinash/p55.jpeg",
        "assets/images/final-images/premium/avinash/p56.jpeg",
        
      ]
    }
    else if(this.clientName == 'dilip') {
      this.images = [
        "assets/images/final-images/premium/dilip/p1.jpeg",
        "assets/images/final-images/premium/dilip/p2.jpeg",
        "assets/images/final-images/premium/dilip/p3.jpeg",
        "assets/images/final-images/premium/dilip/p4.jpeg",
        "assets/images/final-images/premium/dilip/p5.jpeg",
        "assets/images/final-images/premium/dilip/p6.jpeg",
        "assets/images/final-images/premium/dilip/p7.jpeg",
        "assets/images/final-images/premium/dilip/p8.jpeg",
        "assets/images/final-images/premium/dilip/p9.jpeg",
        "assets/images/final-images/premium/dilip/p10.jpeg",
        "assets/images/final-images/premium/dilip/p11.jpeg",
        "assets/images/final-images/premium/dilip/p12.jpeg",
        "assets/images/final-images/premium/dilip/p13.jpeg",
        "assets/images/final-images/premium/dilip/p14.jpeg",
        "assets/images/final-images/premium/dilip/p15.jpeg",
        "assets/images/final-images/premium/dilip/p16.jpeg",
        "assets/images/final-images/premium/dilip/p17.jpeg",
        "assets/images/final-images/premium/dilip/p18.jpeg",
        "assets/images/final-images/premium/dilip/p19.jpeg",
        "assets/images/final-images/premium/dilip/p20.jpeg",
        "assets/images/final-images/premium/dilip/p21.jpeg",
        "assets/images/final-images/premium/dilip/p22.jpeg",
        "assets/images/final-images/premium/dilip/p23.jpeg",
        "assets/images/final-images/premium/dilip/p24.jpeg",
        "assets/images/final-images/premium/dilip/p25.jpeg",
        "assets/images/final-images/premium/dilip/p26.jpeg",
        "assets/images/final-images/premium/dilip/p27.jpeg",
        "assets/images/final-images/premium/dilip/p28.jpeg",
        "assets/images/final-images/premium/dilip/p29.jpeg",
        "assets/images/final-images/premium/dilip/p30.jpeg",
        "assets/images/final-images/premium/dilip/p31.jpeg",
        "assets/images/final-images/premium/dilip/p32.jpeg",
        "assets/images/final-images/premium/dilip/p33.jpeg",
        "assets/images/final-images/premium/dilip/p34.jpeg",
        "assets/images/final-images/premium/dilip/p35.jpeg",
        "assets/images/final-images/premium/dilip/p36.jpeg",
        "assets/images/final-images/premium/dilip/p37.jpeg",
        "assets/images/final-images/premium/dilip/p38.jpeg",
        "assets/images/final-images/premium/dilip/p39.jpeg",
        "assets/images/final-images/premium/dilip/p40.jpeg",
        "assets/images/final-images/premium/dilip/p41.jpeg",
        "assets/images/final-images/premium/dilip/p42.jpeg",
        "assets/images/final-images/premium/dilip/p43.jpeg",
        "assets/images/final-images/premium/dilip/p44.jpeg",
        "assets/images/final-images/premium/dilip/p45.jpeg",
        "assets/images/final-images/premium/dilip/p46.jpeg",
        "assets/images/final-images/premium/dilip/p47.jpeg",
        "assets/images/final-images/premium/dilip/p48.jpeg",
        "assets/images/final-images/premium/dilip/p49.jpeg",
        "assets/images/final-images/premium/dilip/p50.jpeg",
        "assets/images/final-images/premium/dilip/p51.jpeg",
        "assets/images/final-images/premium/dilip/p52.jpeg",
        "assets/images/final-images/premium/dilip/p53.jpeg",
        "assets/images/final-images/premium/dilip/p54.jpeg"
        
      ]
    }
  }

  

}
