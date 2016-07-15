import { Component, OnInit } from "@angular/core";

import { Hero } from "./hero.type";
import { HeroService } from "./hero.service";
import { HeroDetailComponent } from "./hero-detail.component";

@Component({
  selector: "hero-list",
  template: `
  <div>
    <hero-detail *ngFor="let hero of heroes" 
                 [hero]="hero"
                 (change)="onHeroClicked($event)" 
                 (log)="printOnConsole($event)"
                 (attach)="addChildComponent($event)">
    </hero-detail>
    <div *ngIf="lowerPaneSelected">
      <p>{{ selectedHero.name }}</p>
      <p>{{ selectedHero.id }}</p>
      <p>Some random comment</p>
      <p>More random stuff</p>
    </div>
  </div>
  `,
  directives: [HeroDetailComponent]
})
export class HeroListComponent implements OnInit{
  heroes: Hero[];
  lowerPaneSelected: boolean = false;
  selectedHero: Hero;
  heroDetailComponents: HeroDetailComponent[] = []

  constructor(private _heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
  }

  printOnConsole(message: string): void {
    console.log(message);
  }

  onHeroClicked(child: HeroDetailComponent): void {
    for (let comp of this.heroDetailComponents) {
      comp.clicked = false;
    }
    child.clicked = true;
    this.lowerPaneSelected = child.clicked;
    this.selectedHero = child.hero;
  }

  addChildComponent(child: HeroDetailComponent): void {
    this.heroDetailComponents.push(child);
  }
}