import { Component } from "@angular/core";
import { HeroListComponent } from "./Heroes/hero-list.component";
import { IHeroService, HeroService } from "./Heroes/hero.service";
// External sample
import { TreeViewDemo } from "./Directories/tree-view-demo.component";

@Component({
  selector: "app",
  template: `
  <div class="container">
    <h1>A nooby Hero list</h1>
    <hero-list></hero-list>
  </div>
  <!--<tree-view-demo></tree-view-demo>-->
  `,
  directives: [HeroListComponent, TreeViewDemo],
  //providers: [{ provide: IHeroService, useClass: HeroService }]
  providers: [{ provide: IHeroService, useClass: HeroService }]
})
export class AppComponent { }
