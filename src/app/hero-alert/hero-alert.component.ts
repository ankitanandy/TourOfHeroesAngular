import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-alert',
  templateUrl: './hero-alert.component.html',
  styleUrls: ['./hero-alert.component.css']
})
export class HeroAlertComponent implements OnInit {

  @Input() hero:Hero|undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
