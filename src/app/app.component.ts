import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  imgURL = "https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";


  ngOnInit() : void {
    this.title = "Hello From BridgeLabz."
  }
}
