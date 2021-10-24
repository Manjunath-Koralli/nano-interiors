import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Home1Component } from './components/home1/home1.component';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PremiumComponent } from './components/premium/premium.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ServicesComponent,
    ContactComponent,
    AboutUsComponent,
    Home1Component,
    PremiumComponent,
    GalleryComponent,
    CustomerReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularTypewriterEffectModule,
    CarouselModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCzMH_xDGDdyRlyGEZzUzF3NLwOkC5_CkQ',
      apiKey : 'AIzaSyB0c-ugi6L7ojm6bSSGTQnc9Yw25EDIvwo',
      libraries: ['places']
    }),
    
    /*AngularFireModule.initializeApp({
      apiKey: "AIzaSyDuXRBWqgNaKV16ckCYewh2IDBgvCgQP5M",
      authDomain: "interior-design-98ab2.firebaseapp.com",
      projectId: "interior-design-98ab2",
      storageBucket: "interior-design-98ab2.appspot.com",
      messagingSenderId: "849073272633",
      appId: "1:849073272633:web:1bda098c8154ad32169ae8",
      measurementId: "G-9RQ1352ZT5"
    })*/

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAw5_XjuCuZ7kzCRLpbWhqNrQwVZMpv6R4",
      // authDomain: "nano-interiors.firebaseapp.com",
      authDomain: "nanointeriors.com",
      projectId: "nano-interiors",
      storageBucket: "nano-interiors.appspot.com",
      messagingSenderId: "29127173164",
      appId: "1:29127173164:web:3dcbe6d8b7d9f8c5e59d89",
      measurementId: "G-874CM973SG",
      databaseURL: "https://nano-interiors-default-rtdb.asia-southeast1.firebasedatabase.app",
    }),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
