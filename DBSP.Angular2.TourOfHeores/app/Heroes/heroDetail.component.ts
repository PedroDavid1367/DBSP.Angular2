import { Component, Input } from "@angular/core";

import { Hero } from "./hero.type";

@Component({
  selector: "hero-detail",
  template: `
  <div>
    <p><em>{{ hero.name }}</em></p>
    <p><em>{{ hero.id }}</em></p>
    <p><em>Hard coded comment</em></p>
    <p><em>More hard coded comment</em></p>
  </div> 
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}






