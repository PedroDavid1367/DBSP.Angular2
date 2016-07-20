import { Component } from "@angular/core"

@Component({
  selector: "testing-directives",
  template: `
  <br/>
  <input type="button" class="btn btn-primary small" 
         (click)="toggleClass()" value="Toggle Class"> 
  <div [class]="isHidden">Hidden Class</div>
  <div [class]="isHidden">Not Hidden Class</div>
  <br/>
  <select (change)="onChange($event.target.value)">
    <option *ngFor="let color of colors">{{ color }}</option>
  </select>
  <br/>
  <div [ngSwitch]="pickedColor">
    <div *ngSwitchCase="'beige'">Here's a preety beige color</div>
    <div *ngSwitchCase="'green'">Here's a preety green color</div>
    <div *ngSwitchDefault>Here's a preety blue color</div>
  </div>
  `
})
export class TestingDirectives {
  isHidden: string = "show";
  pickedColor: string = "beige";
  colors: string[] = ["beige", "green", "blue"];
  toggleClass() {
    this.isHidden = this.isHidden == "show" ? "hidden" : "show";
  }
  onChange(value: string) {
    this.pickedColor = value;
    console.log(value);
  }
}