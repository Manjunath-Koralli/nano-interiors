import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faQuoteLeft, faStar as faStar1 } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons'
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  strings =  ['Apartment', 'Plaza','House'];
  recentWorkOptions: OwlOptions = { 
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
        items: 4
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
        items: 5
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
      src : 'assets/images/cl-1.png',
    },
    {
      id : 'two',
      src : 'assets/images/cl-2.png',
      
    },
    {
      id : 'three',
      src : 'assets/images/cl-3.png',
      
    },
    {
      id : 'four',
      src : 'assets/images/cl-4.png',
    },
    {
      id : 'five',
      src : 'assets/images/cl-5.png',
    },
    {
      id : 'six',
      src : 'assets/images/cl-6.png',
    },
    {
      id : 'seven',
      src : 'assets/images/cl-7.png',
    }
  ]

  faQuoteLeft = faQuoteLeft;
  faStar1 = faStar1;
  faStar2 = faStar2;
  dogbtnActive : any ;
  cowbtnActive : any ;
  humanbtnActive : any;
  allbtnActive : any;

  @ViewChild("dogFilter")
  buttonDog!: ElementRef; 

  @ViewChild("cowFilter")
  buttonCow!: ElementRef;

  @ViewChild("humanFilter")
  buttonHuman!: ElementRef;

  @ViewChild("allFilter")
  buttonAll!: ElementRef;

  constructor() { 
  }

  ngOnInit(): void {
  }

  all : boolean = true;
  residential : boolean = false;
  commercial : boolean = false;
  office : boolean = false;  

  show(type : string){
      if(type === 'all') {
        this.all = true;
        this.residential = false;
        this.commercial = false;
        this.office = false;
        this.buttonAll.nativeElement.classList.add('active')
        this.buttonDog.nativeElement.classList.remove('active');
        this.buttonCow.nativeElement.classList.remove('active');
        this.buttonHuman.nativeElement.classList.remove('active');        
      }
      else if(type === 'commercial') {
        this.all = false;
        this.residential = false;
        this.commercial = true;
        this.office = false;
        this.buttonAll.nativeElement.classList.remove('active')
        this.buttonDog.nativeElement.classList.remove('active');
        this.buttonCow.nativeElement.classList.add('active');
        this.buttonHuman.nativeElement.classList.remove('active');  
      }
      else if(type === 'residential') {
        this.all = false;
        this.residential = true;
        this.commercial = false;
        this.office = false;
        this.buttonAll.nativeElement.classList.remove('active')
        this.buttonDog.nativeElement.classList.add('active');
        this.buttonCow.nativeElement.classList.remove('active');
        this.buttonHuman.nativeElement.classList.remove('active');  
      }
      else if(type === 'office') {
        this.all = false;
        this.residential = false;
        this.commercial = false;
        this.office = true;
        this.buttonAll.nativeElement.classList.remove('active')
        this.buttonDog.nativeElement.classList.remove('active');
        this.buttonCow.nativeElement.classList.remove('active');
        this.buttonHuman.nativeElement.classList.add('active');  
      }
  }
  

  

  
  
  
  

}
