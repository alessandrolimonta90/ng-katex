import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ng-katex demo app';
  equation: string = "c = \\pm\\sqrt{a^2 + b^2}";
  options: any = {
    displayMode: true,
  };
}