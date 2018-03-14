import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroes1:Hero[];
selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes1 => this.heroes1 = heroes1);
  }
  ngOnInit() {
    this.getHeroes();
  }
  }
