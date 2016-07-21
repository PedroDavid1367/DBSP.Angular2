import { Component } from "@angular/core"

@Component({
  selector: "testing-directives",
  template: `
  <div class="container">
    <br/>
    <input type="button" class="btn btn-primary btn-xs" 
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
    <br/>
    <input #inputName type="text" placeholder="Your name" />
    <input type="btn" class="btn btn-primary btn-xs"
           (click)="greet(inputName.value)" value="Print name" />
    <div>{{ printedName }}</div>
    <br/>
    <br/>
    <form #theForm="ngForm" (ngSubmit)="onSubmit(theForm)">
      <div class="form-group">
        <label for="status">Status</label>
        <input type="text" class="form-control" name="status"
               [(ngModel)]="noobyObject.status" placeholder="Your status"
               #status="ngModel" required />
        <div [hidden]="status.valid || status.pristine" class="alert alert-danger">
          Status is required
        </div>
      </div>
      <button class="btn btn-default btn-xs" 
              type="submit" [disabled]="!theForm.form.valid">
        Submit
      </button>
    </form>
    <pre>{{ noobyObject | json }}</pre>
    <div style="background-color=beige;">{{ printedName }}</div>
  </div>
  `
})
export class TestingDirectives {
  isHidden: string = "show";
  pickedColor: string = "beige";
  colors: string[] = ["beige", "green", "blue"];
  printedName: string = "";
  noobyObject = { status: "" };

  toggleClass() {
    this.isHidden = this.isHidden == "show" ? "hidden" : "show";
  }
  onChange(value: string) {
    this.pickedColor = value;
    console.log(value);
  }
  greet(name: string) {
    this.printedName = name;
    console.log(name);
  }

  onSubmit(formElement: any) {
    console.log(formElement);
    // Kinda awkward, although I love it.
    this.greet(this.noobyObject.status);
  }
}

