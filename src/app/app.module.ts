import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { ListingListComponent } from './components/listing-list/listing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingDetailsComponent,
    ListingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
