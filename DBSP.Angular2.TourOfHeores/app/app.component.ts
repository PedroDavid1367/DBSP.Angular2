import { Component }                  from "@angular/core";
import { HeroListComponent }          from "./Heroes/hero-list.component";
import { IHeroService, HeroService }  from "./Heroes/hero.service";

import { Oauth2COmponent }            from "./Oauth2/oauth2.component";                
// External sample
import { TreeViewDemo }               from "./Directories/tree-view-demo.component";
import { TestingDirectives }          from "./Directories/testing-directives.component";

@Component({
  selector: "app",
  //template: `
  //<div class="container">
  //  <h1>A nooby Hero list</h1>
  //  <hero-list></hero-list>
  //</div>
  //<testing-directives></testing-directives>
  //<!--<tree-view-demo></tree-view-demo>-->
  //`,
  template: `
  <oauth2></oauth2>
  `,
  directives: [HeroListComponent, TreeViewDemo, TestingDirectives, Oauth2COmponent],
  //providers: [{ provide: IHeroService, useClass: HeroService }]
  providers: [{ provide: IHeroService, useClass: HeroService }]
})
export class AppComponent { }
