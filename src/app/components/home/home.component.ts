import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  strings =  ['Apartment', 'Plaza','House'];
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

  slidesStore = [
    {
      id : 'one',
      src : 'assets/images/s-1.jpg',
      title : 'Luxury House',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'two',
      src : 'assets/images/s-2.jpg',
      title : 'Luxury Condo',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'three',
      src : 'assets/images/s-3.jpg',
      title : 'Luxury House',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'four',
      src : 'assets/images/s-6.jpg',
      title : 'Luxury Apartment',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'five',
      src : 'assets/images/p-1.jpg',
      title : 'Luxury Condo',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'six',
      src : 'assets/images/p-2.jpg',
      title : 'Villa House',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'seven',
      src : 'assets/images/p-5.jpg',
      title : 'Family Apartment',
      amount : '$23000',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
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
