import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coding-cube-front';
  isInitialized = false;

  init(value: boolean): void {
    this.isInitialized = value;
  }
}
