import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent implements OnInit {

  selectedTab = 0;
  data: any = {};

  constructor(public service: ServiceService) {}

  ngOnInit() {
    this.data = {
      author: localStorage.getItem('author'),
      date: new Date(),
    };
  }

  isValid() {
    return this.data.author && this.data.date && this.data.period && this.data.observation;
  }

  save() {
    console.log(this.data);
    localStorage.setItem('author', this.data.author);
    this.service.save(this.data).subscribe(() => {
      console.log('ok');
    })
  }

  next() {
    this.selectedTab ++;
  }

  previous() {
    this.selectedTab --;
  }

}
