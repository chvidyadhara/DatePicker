import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepComponent } from './datep/datep.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {FormsModule }  from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { DateserService } from './dateser.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DatepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DateserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
