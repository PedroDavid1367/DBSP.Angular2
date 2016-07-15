import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from "@angular/core";

import { Hero } from "./hero.type";

@Component({
  selector: "hero-detail",
  styles: [".active { background-color: beige; }"],
  template: `
  <div [ngClass]="{active: clicked}">
    <span>{{ hero.id }}. </span> 
    <a href="#" (click)="heroClicked()">{{ hero.name }}</a>
  </div>
  `
})
export class HeroDetailComponent implements OnChanges, OnInit {
  @Input() hero: Hero;
  @Output() change: EventEmitter<HeroDetailComponent> = new EventEmitter<HeroDetailComponent>();
  @Output() log: EventEmitter<string> = new EventEmitter<string>();
  @Output() attach: EventEmitter<HeroDetailComponent> = new EventEmitter<HeroDetailComponent>() 
  clicked: boolean = false;

  ngOnChanges() {
    this.log.emit(`ngOnChanges activated for: ${this.hero.name}`);
  }

  ngOnInit() {
    this.attach.emit(this);
  }

  heroClicked(): void {
    this.change.emit(this);
  }
}







