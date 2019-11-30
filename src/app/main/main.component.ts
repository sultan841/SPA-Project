import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isTrue = false;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.isTrue = this.isTrue ? false: true;
  

  }

}
