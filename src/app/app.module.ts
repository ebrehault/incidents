import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
