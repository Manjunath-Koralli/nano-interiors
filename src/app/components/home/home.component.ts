import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faQuoteLeft, faStar as faStar1, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faInstagramSquare, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  strings =  ['Residentials','Plaza','Apartment'];
 
  faQuoteLeft = faQuoteLeft;
  faStar1 = faStar1;
  faStar2 = faStar2;
  faMapMarkerAlt = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;

  faInstagram = faInstagram;
  faInstagramSquare = faInstagramSquare;
  faPhoneSquareAlt = faPhoneSquareAlt;
  faWhatsapp = faWhatsapp;
  faWhatsappSquare = faWhatsappSquare;

  customOptions: OwlOptions = { 
    margin : -650,
    stagePadding: 0,   
    autoplay : true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false    
  }


  recentWorkOptions: OwlOptions = { 
    //margin : 0,
    //stagePadding: 0,   
    autoplay : true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    center: true,
    //navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 6
      }
    },
    nav: false    
  }

  customerOptions: OwlOptions = { 
    margin : 10,
    stagePadding: 0,   
    autoplay : true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    //navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true    
  }

  clientsOptions: OwlOptions = { 
    margin : 0,
    stagePadding: 0,   
    autoplay : true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    //navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 5
      }
    },
    nav: false    
  }

  slidesStore = [
    {
      id : 'one',
      src : '../../../assets/images/final-images/carousel/c8.jpg',
      
      // src : 'assets/images/final-images/carousel/c8.jpg',
      title : 'Luxury House',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'two',
      src : '../../../assets/images/final-images/carousel/c7.JPG',
      // src : 'assets/images/final-images/carousel/c7.JPG',
      title : 'Luxury Condo',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'three',
      src : '../../../assets/images/final-images/carousel/c6.jpg',
      title : 'Luxury House',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'four',
      src : '../../../assets/images/final-images/carousel/c5.jpg',
      title : 'Luxury Apartment',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'five',
      src : '../../../assets/images/final-images/carousel/c4.jpg',
      title : 'Luxury Condo',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'six',
      src : '../../../assets/images/final-images/carousel/c3.JPG',
      title : 'Villa House',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'seven',
      src : '../../../assets/images/final-images/carousel/c2.JPG',
      title : 'Family Apartment',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'eight',
      src : '../../../assets/images/final-images/carousel/c1.JPG',
      title : 'Family Apartment',
      amount : '$1000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    }
    
  ]

  customerStore = [
    {
      id : 'one',
      src : 'assets/images/ts-1.jpg',
      name : 'Lisa Smith',
      location : 'Raichur',
      rating : '5',
      feedback : 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with Crystalo.'
    },
    {
      id : 'two',
      src : 'assets/images/ts-4.jpg',
      name : 'Gary Steven',
      location : 'Bengaluru',
      rating : '4',
      feedback : 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with Crystalo.'
    },
    {
      id : 'three',
      src : 'assets/images/ts-1.jpg',
      name : 'Jhon Morris',
      location : 'Hubli',
      rating : '3',
      feedback : 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with Crystalo.'
    },
    {
      id : 'four',
      src : 'assets/images/ts-6.jpg',
      name : 'Marry Smith',
      location : 'Dharwad',
      rating : '4',
      feedback : 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with Crystalo.'
    },
    {
      id : 'five',
      src : 'assets/images/ts-1.jpg',
      name : 'Cristy Mayer',
      location : 'Gulbarga',
      rating : '5',
      feedback : 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with Crystalo.'
    }
  ]

  clientStore = [
    {
      id : 'one',
      src : 'assets/images/final-images/greenply-logo.png',
    },
    {
      id : 'two',
      src : 'assets/images/final-images/ebco-1.png',
      
    },
    {
      id : 'three',
      src : 'assets/images/final-images/royale-touch-1.png',      
    },
    {
      id : 'four',
      src : 'assets/images/final-images/hettich.png',
    },
    {
      id : 'five',
      src : 'assets/images/final-images/century-ply.png',
    },
    {
      id : 'six',
      src : 'assets/images/final-images/merino.png',
    },
    {
      id : 'seven',
      src : 'assets/images/final-images/greenply-logo.png',
    }
  ]
  constructor() {
    
  }

  ngOnInit(): void {
    for(let slide of this.slidesStore) {
      console.log(slide.id)
    }
  }
  

}
