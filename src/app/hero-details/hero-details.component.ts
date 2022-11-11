import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero?:Hero
  myname:string="Hello world";
  constructor(private route:ActivatedRoute,private heroService:HeroService,private location:Location) { }

  ngOnInit(): void {
    const params=this.route.snapshot.paramMap;
    var heroid=Number(params.get('id'));
    this.heroService.getHero(heroid).subscribe(hs=>this.hero=hs);
    
  }
  goBack(){
    this.location.back();
  }
  save()
  {
    this.heroService.updateHeroes(this.hero);
  }

}
