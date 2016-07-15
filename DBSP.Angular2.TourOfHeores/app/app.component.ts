import { Component } from "@angular/core";
import { HeroListComponent } from "./Heroes/heroList.component";
import { IHeroService } from "./Heroes/hero.service";

@Component({
  selector: "app",
  template: `
  <h1>A nooby Hero list</h1>
  <hero-list></hero-list>
  `,
  directives: [HeroListComponent],
  providers: [IHeroService]
})
export class AppComponent { }
