import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBmCUD7IbFcDsKX4xdfqRfWQseI7U7T1t8",
  authDomain: "crud-firebase-474f7.firebaseapp.com",
  projectId: "crud-firebase-474f7",
  storageBucket: "crud-firebase-474f7.appspot.com",
  messagingSenderId: "123743231531",
  appId: "1:123743231531:web:49cc233654a2faa6a5d46e"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
