import { MapsAPILoader } from '@agm/core';
import { Component, NgZone, OnInit } from '@angular/core';
import { faQuoteLeft, faStar as faStar1, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faInstagramSquare, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ClientNameService } from 'src/app/common/client-name.service';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss']
})
export class DesignsComponent implements OnInit {

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
  private fb:any;
  _3dArray:any = [];
  latitude!: number;
  longitude!: number;
  zoom!: number;
  //address!: string;
  private geoCoder: any;
  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone,private router: Router,
        private nameService : ClientNameService, private storage: AngularFireStorage) { }

  async ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    });
    this.storage.ref('/3d-designs').listAll().subscribe(url => {
      if (url) {
         this.fb = url.items;
      }
      this.fb.forEach(async (element:any) => {
        this._3dArray.push(await element.getDownloadURL());
      });
    });
    console.log(this._3dArray)
  }

  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = 12.8922944;
        this.longitude = 77.728169;
        this.zoom = 18;
        console.log(this.latitude,this.longitude)
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

  goToGallery(name : string){
    this.nameService.setClientName(name);
    this.router.navigateByUrl('projects/budget/gallery');
  }


}
