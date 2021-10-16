import { Component, ElementRef, NgZone, OnInit, ViewChild,  } from '@angular/core';
import { faQuoteLeft, faStar as faStar1, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faInstagramSquare, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @ViewChild("res")
  buttonRes!: ElementRef; 

  @ViewChild("com")
  buttonCom!: ElementRef;

  // @ViewChild("office")
  // buttonOff!: ElementRef;

  // @ViewChild("all")
  // buttonAll!: ElementRef;  

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

  all : boolean = false;
  residential : boolean = true;
  commercial : boolean = false;
  office : boolean = false;

  latitude!: number;
  longitude!: number;
  zoom!: number;
  //address!: string;
  private geoCoder: any;
  
  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone,private router: Router) { }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    });
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
        // this.zoom = 8;
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
    this.latitude = 12.8922944;
    this.longitude = 77.728169;
    //this.zoom = 18;
    //this.getAddress(this.latitude, this.longitude);
  }

  goToPremium() {
    this.router.navigateByUrl('projects/premium');
  }

}
