import { AfterContentChecked, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { faQuoteLeft, faStar as faStar1, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faInstagramSquare, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MapsAPILoader } from '@agm/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestoreCollection,AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit, AfterContentChecked {

  strings =  ['Apartment', 'Plaza','Residentials'];
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
      src : 'assets/images/final-images/carousel/c8.jpg',      
      // src : 'assets/images/final-images/carousel/c8.jpg',
      title : 'Luxury House',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'two',
      src : 'assets/images/final-images/carousel/c7-min.JPG',
      // src : 'assets/images/final-images/carousel/c7.JPG',
      title : 'Luxury Condo',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'three',
      src : 'assets/images/final-images/carousel/c6.jpg',
      title : 'Luxury House',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'four',
      src : 'assets/images/final-images/carousel/c5.jpg',
      title : 'Luxury Apartment',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'five',
      src : 'assets/images/final-images/carousel/c4.jpg',
      title : 'Luxury Condo',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'six',
      src : 'assets/images/final-images/carousel/c3-min.JPG',
      title : 'Villa House',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'seven',
      src : 'assets/images/final-images/carousel/c2-min.JPG',
      title : 'Family Apartment',
      spec1 : '6 Bed',
      spec2 : '3 Bath',
      area : '720 sq ft'
    },
    {
      id : 'eight',
      src : 'assets/images/final-images/carousel/c1-min.JPG',
      title : 'Family House',
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
    }
  ]

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
  //faPhoneAlt = faPhoneAlt;
  
  dogbtnActive : any ;
  cowbtnActive : any ;
  humanbtnActive : any;
  allbtnActive : any;

  @ViewChild("res")
  buttonRes!: ElementRef; 

  @ViewChild("com")
  buttonCom!: ElementRef;

  // @ViewChild("office")
  // buttonOff!: ElementRef;

  // @ViewChild("all")
  // buttonAll!: ElementRef; 

  all : boolean = false;
  residential : boolean = true;
  commercial : boolean = false;
  office : boolean = false;

  latitude!: number;
  longitude!: number;
  zoom!: number;
  //address!: string;
  private geoCoder: any;

  quoteForm!: FormGroup;
  contactForm!: FormGroup;
  selectedItemsList1 : any = [];
  selectedItemsList2 : any = [];
  private submissionForm!: AngularFirestoreCollection<any>;
  private submissionContactForm!: AngularFirestoreCollection<any>;

  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone, private fb: FormBuilder,
      private changeDetector:ChangeDetectorRef,private firestore: AngularFirestore, private router: Router) { 
  }

  ngOnInit(): void {
    this.fetchSelectedItems();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    });

    this.submissionForm = this.firestore.collection('submissions');
    this.submissionContactForm = this.firestore.collection('contact');
    this.quoteForm = this.fb.group({
      room : [''],
      budget : [''],
      part : [''],
      time : [''],
      type : [''],
      name : [''],
      city : [''],
      phone : [''],
      email : ['']
    });
    this.contactForm = this.fb.group({
      contact : [''],
      email : ['']
    });
    
  }    

  ngAfterContentChecked() : void {
    this.changeDetector.detectChanges();
  }

  show(type : string){
      if(type === 'all') {
        this.all = true;
        this.residential = false;
        this.commercial = false;
        this.office = false;
        // this.buttonAll.nativeElement.classList.add('active')
        this.buttonCom.nativeElement.classList.remove('active');
        // this.buttonOff.nativeElement.classList.remove('active');
        this.buttonRes.nativeElement.classList.remove('active');        
      }
      else if(type === 'commercial') {
        this.all = false;
        this.residential = false;
        this.commercial = true;
        this.office = false;
        // this.buttonAll.nativeElement.classList.remove('active')
        // this.buttonOff.nativeElement.classList.remove('active');
        this.buttonCom.nativeElement.classList.add('active');
        this.buttonRes.nativeElement.classList.remove('active');  
      }
      else if(type === 'residential') {
        this.all = false;
        this.residential = true;
        this.commercial = false;
        this.office = false;
        // this.buttonAll.nativeElement.classList.remove('active')
        this.buttonRes.nativeElement.classList.add('active');
        this.buttonCom.nativeElement.classList.remove('active');
        // this.buttonOff.nativeElement.classList.remove('active');  
      }
      else if(type === 'office') {
        this.all = false;
        this.residential = false;
        this.commercial = false;
        this.office = true;
        // this.buttonAll.nativeElement.classList.remove('active')
        this.buttonRes.nativeElement.classList.remove('active');
        this.buttonCom.nativeElement.classList.remove('active');
        // this.buttonOff.nativeElement.classList.add('active');  
      }
  }

  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.latitude = position.coords.latitude;
        // this.longitude = position.coords.longitude;
        this.latitude = 12.892333;
        this.longitude = 77.730384;
        this.zoom = 15;
        console.log(this.latitude,this.longitude)
        //this.getAddress(this.latitude, this.longitude);
      });
    }
  }
 
  markerDragEnd($event: any) {
    console.log($event);
    // this.latitude = $event.coords.lat;
    // this.longitude = $event.coords.lng;
    //this.getAddress(this.latitude, this.longitude);
    this.latitude = 12.8922944;
    this.longitude = 77.728169;
  }  

  checkboxesDataList1 = [
    {
      id: 'C001',
      label: 'Kitchen',
      isChecked: true
    },
    {
      id: 'C002',
      label: 'Master Bedroom',
      isChecked: false
    }
  ]
  checkboxesDataList2 = [
    {
      id: 'C003',
      label: 'Other Bedrooms',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Dining/Living',
      isChecked: false
    },
  ]

  
  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedItemsList1 = this.checkboxesDataList1.filter((value, index) => {
      return value.isChecked
    });

    this.selectedItemsList2 = this.checkboxesDataList2.filter((value, index) => {
      return value.isChecked
    });
  }

  submitData(value: any) {
    console.log(this.selectedItemsList1);
    console.log(this.selectedItemsList2);
    
    value = {...value,part1 : this.selectedItemsList1};
    value = {...value, part2 : this.selectedItemsList2};
    console.log(value);
    this.submissionForm.add(value).then(res => {
      console.log(res);
      alert("Successfully submitted")
    }).catch(err => console.log(err)
    ).finally(() => {
      
    });
  }

  submitContactData(value: any) {
    this.submissionContactForm.add(value).then(res => {
      console.log(res);
      alert("Successfully submitted")
    }).catch(err => console.log(err)
    ).finally(() => {
      
    });
  }
  
  goToPremium() {
    this.router.navigateByUrl('projects/premium');
  }
  

}
