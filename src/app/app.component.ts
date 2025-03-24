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
  url = "https://www.bridgelabz.com";
  userName : string = "";
  nameError : string = "";


  ngOnInit() : void {
    this.title = "Hello From BridgeLabz."
  }
  onClick($event: any) {
    console.log("Image is Clicked!" , $event);
    window.open(this.url , "_blank");
  }
  onInput($event: any){
    console.log("Change Event Occured !" , $event.data );
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!"
  }
}
