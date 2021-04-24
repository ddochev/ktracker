import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';


import { HttpClientModule } from '@angular/common/http';
import { OmapsService } from './omaps/omaps.service';

// import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrckerComponent } from './trcker/trcker.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { OmapsComponent } from './omaps/omaps.component';

@NgModule({
  declarations: [
    AppComponent,
    TrckerComponent,
    AboutComponent,
    ContactsComponent,
    GmapsComponent,
    OmapsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ],
  providers: [
    OmapsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
