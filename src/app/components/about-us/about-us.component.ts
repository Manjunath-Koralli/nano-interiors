import { Component, NgZone, OnInit } from '@angular/core';
import { faGlobeAsia, faHeadphonesAlt, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft, faStar as faStar1, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faInstagramSquare, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  faGlobeAsia = faGlobeAsia;
  faHeadphonesAlt = faHeadphonesAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;

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

  latitude!: number;
  longitude!: number;
  zoom!: number;
  //address!: string;
  private geoCoder: any;
  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone) { }

  ngOnInit(): void {
    $('.counter').each(function () {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    });
  
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
    this.latitude = 12.8922944;
    this.longitude = 77.728169;
    //this.getAddress(this.latitude, this.longitude);
  }

}
