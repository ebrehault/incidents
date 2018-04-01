import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent implements OnInit {

  selectedTab = 0;
  data: any = {};

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
  }

  next() {
    this.selectedTab ++;
  }

  previous() {
    this.selectedTab --;
  }

}
