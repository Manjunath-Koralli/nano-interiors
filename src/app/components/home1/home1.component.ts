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
import { FileUploadService } from 'src/app/services/file-upload.service';
import { map } from 'rxjs/operators';

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
    //margin : 10,
    //stagePadding: 0,   
    autoplay : true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 3000,
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
        items: 2
      },
      940: {
        items: 5
      }
    },
    nav: false    
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
      src : 'assets/images/final-images/reviews/Meenakshi.jpeg',
      name : 'Menakshi',
      location : 'Bangalore',
      rating : '5',
      feedback : 
      'When I was contemplating between many brands for my house interiors, I came to know about Nano interiors. ' + 
      'They took my requirements carefully, designed based on my needs and gave adequate information before going ahead. '+ 
      'Owner is very nice and humble person who addresses all customers needs. '+ 
      'They use all high quality products. My house turned out to be so elegant and beautiful. Thanks to Nano interiors. '
    },
    {
      id : 'two',
      src : 'assets/images/final-images/reviews/Abhik.jpeg',
      name : 'Abhik Pal',
      location : 'Bengaluru',
      rating : '5',
      feedback : 
      'I had been looking for a good interior designer and at the same time budget friendly. '+
      'I had spoken with many designers but finally we decided to go with NANO INTERIOR as their owner is so humble and is a very nice person. '+
      'Also the people who work under him are very well trained and the work they do has so good perfection. '+
      'Also they finished the work within the stipulated time and kept their commitments. '+
      'You should always go with NANO INTERIOR. '
    },
    {
      id : 'three',
      src : 'assets/images/final-images/reviews/Sanjay Biswas.jpeg',
      name : 'Sanjay Biswas',
      location : 'Bengaluru',
      rating : '5',
      feedback : 
      'I have done my flat interior work with Nano Interiors and their owner is very good person. '+
      'The team who work under him are also very well trained. '+
      '90% of the work was done by his factory (machine fitting)'+
      'and also they finished the work within the stipulated time. '+
      'Thank you Nano Interior owner & team.'
    },
    {
      id : 'four',
      src : 'assets/images/final-images/reviews/Kalyan Biswas.jpeg',
      name : 'Kalyan Biswas',
      location : 'Bengaluru',
      rating : '5',
      feedback : 
      "We have had the pleasure of working with Niranjan from Nano Interiors and his competent and professional team for our home interiors. They are very professional and creative team. Their key strength lies in quickly understanding customer requirements and bringing new suggestions and options based on experience. He along with her team of carpenters brought in a very realistic, practical and a durable outlook to our interiors within the budget that we had outlined and several additions that we kept suggesting. Attention to small details and complete ownership - result an impeccable job. Thank you Niranjan! We truly enjoyed working with you. Wish you and your team the very best."
      
    },
    {
      id : 'five',
      src : 'assets/images/final-images/reviews/Madhurima.jpeg',
      name : 'Madhurima',
      location : 'Bengaluru',
      rating : '5',
      feedback : 
      "We got our new bangalore home interiors done from Nano Interiors and must say it's a very satisfactory experience."+
      "Before the search started for an interior decorator,"+
      "we were skeptical due to various negative reviews on various companies where projects were delayed and responses"+
      "and quality was terrible."+
      "Even though they may fall in the premium category as some may say, however we feel it was totally worth it."+ 
      "We had an urgent 3 weeks move it timeline and the work scale was considerable."+
      "They not only ensured we were able to move in on agreed timelines but also had a very helpful, "+
      "professional and accommodative approach and also ensured great quality of work delivered. "+
      "Price is also reasonable. "+
      "The team is extremely professional and make sure to fulfil all requirements of the customers. "+
      "If you are looking for an upscale interior, go for them. You will not regret on your decision. "+
      "A big THANK YOU to Niranjan Jee and all the team members of Nano Interiors... Keep going 🙂"
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

  fileUploads!: any[];
  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone, private fb: FormBuilder,
      private changeDetector:ChangeDetectorRef,private firestore: AngularFirestore, private router: Router,
      private uploadService: FileUploadService) { 
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
