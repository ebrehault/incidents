import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent implements OnInit {

  selectedTab = 0;
  data: any;
  loading = false;

  constructor(
    public service: ServiceService,
    public router: Router,
    public snackbar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.data = {
      author: localStorage.getItem('author'),
      date: new Date(),
      period: null,
      observation: null,
      solution: null,
      enfants: null,
    };
  }

  isValid() {
    if (this.data.author && this.data.date && this.data.period && this.data.observation === 'RAS') {
      return true;
    }
    return Object.keys(this.data).every(key => this.data[key]);
  }

  save() {
    console.log(this.data);
    localStorage.setItem('author', this.data.author);
    this.loading = true;
    this.service.save(this.data).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/']);
    }, () => {
      this.loading = false;
      this.snackbar.open("Une erreur s'est produite pendant l'enregistrement.", null, {duration: 2000})
    });
  }

  next() {
    this.selectedTab ++;
  }

  previous() {
    this.selectedTab --;
  }

}
