import { Component, OnInit } from '@angular/core';
import { heroes } from '../mock-heroes';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes=heroes;
  constructor() { }

  ngOnInit(): void {
    console.log('hero-list on init');
  }
  ngOnChanges(): void {
    console.log('hero-list on changes');
  }
  ngdoCheck(): void {
    console.log('hero-list do check');
  }
  ngOndestory(): void {
    console.log('hero-list on destory');
  }

  OnNotify(){
    window.alert('Notified');
  }

}
