import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
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
  MatProgressSpinnerModule,
  MatSnackBarModule,
} from '@angular/material';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { ServiceService } from './service.service';
import { AppComponent } from './app.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: IncidentFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IncidentFormComponent,
    HomeComponent,
  ],
  entryComponents: [
    IncidentFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true}),
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
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [
    ServiceService,
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
