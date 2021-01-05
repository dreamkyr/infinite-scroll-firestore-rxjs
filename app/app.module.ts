import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirebaseService } from './firebase.service';
import { MatSlideToggleModule } from '@angular/material';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
//Masonry
import { MasonryModule } from 'angular2-masonry';

import { PaginationService } from './pagination.service';
import { ScrollableDirective } from './scrollable.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFireModule.initializeApp(environment.firebase), MatSlideToggleModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, ScrollableDirective, LoadingSpinnerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AngularFirestore, FirebaseService, PaginationService ]
})
export class AppModule { }
