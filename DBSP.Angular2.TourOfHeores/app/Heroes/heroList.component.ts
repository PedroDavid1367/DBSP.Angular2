import { Component, OnInit } from "@angular/core";

import { Hero } from "./hero.type";
import { IHeroService, HeroService } from "./hero.service";
import { HeroDetailComponent } from "./heroDetail.component";

@Component({
  selector: "hero-list",
  template: `
  <div>
    <div *ngFor="let hero of heroes">
      <div>
        {{ hero.id }}.- <a href="#" (click)="select(hero)">{{ hero.name }}</a>
      </div>
    </div>
    <div *ngIf="selectedHero">
      <hero-detail [hero]="selectedHero"></hero-detail>
    </div>
  </div>
  `,
  directives: [HeroDetailComponent]
})
export class HeroListComponent implements OnInit{
  private _heroService: IHeroService;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(heroService: IHeroService) {
    this._heroService = new HeroService();
  }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
  }

  select(hero: Hero) {
    this.selectedHero = hero;
  }
}