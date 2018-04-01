import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatTabsModule,
  MatDatepickerModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatNativeDateModule,
  MatSelectModule,
} from '@angular/material';

import { ServiceService } from './service.service';
import { AppComponent } from './app.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';


@NgModule({
  declarations: [
    AppComponent,
    IncidentFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
