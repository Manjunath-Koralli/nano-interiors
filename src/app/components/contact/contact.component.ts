import { Component, NgZone, OnInit } from '@angular/core';
import { faGlobeAsia, faHeadphonesAlt, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft, faStar as faStar1, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faInstagramSquare, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { MapsAPILoader } from '@agm/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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

  feedbackForm!: FormGroup;
  selectedItemsList1 : any = [];
  selectedItemsList2 : any = [];
  private submissionfeedbackForm!: AngularFirestoreCollection<any>;

  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone,private fb: FormBuilder,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    });

    this.submissionfeedbackForm = this.firestore.collection('feedback');
    this.feedbackForm = this.fb.group({
      firstname : [''],
      lastname : [''],
      message : [''],
      email : ['']
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

  submitData(value: any) {
    console.log(value);
    this.submissionfeedbackForm.add(value).then(res => {
      console.log(res);
      alert("Successfully submitted")
    }).catch(err => console.log(err)
    ).finally(() => {
      
    });
  }

}
