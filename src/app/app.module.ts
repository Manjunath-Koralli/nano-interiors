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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ServicesComponent,
    ContactComponent,
    AboutUsComponent,
    Home1Component
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
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDuXRBWqgNaKV16ckCYewh2IDBgvCgQP5M",
      authDomain: "interior-design-98ab2.firebaseapp.com",
      projectId: "interior-design-98ab2",
      storageBucket: "interior-design-98ab2.appspot.com",
      messagingSenderId: "849073272633",
      appId: "1:849073272633:web:1bda098c8154ad32169ae8",
      measurementId: "G-9RQ1352ZT5"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
