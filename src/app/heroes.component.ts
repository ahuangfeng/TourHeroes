import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit{

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router,private heroService: HeroService) {
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void{
    this.heroService.getHeroes().then(heroes1 => this.heroes = heroes1);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

