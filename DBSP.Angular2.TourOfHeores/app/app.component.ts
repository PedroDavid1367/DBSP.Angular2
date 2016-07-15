import { Component } from "@angular/core";
import { HeroListComponent } from "./Heroes/hero-list.component";
import { IHeroService } from "./Heroes/hero.service";

@Component({
  selector: "app",
  template: `
  <div class="container">
    <h1>A nooby Hero list</h1>
    <hero-list></hero-list>
  </div>
  `,
  directives: [HeroListComponent],
  providers: [IHeroService]
})
export class AppComponent { }
