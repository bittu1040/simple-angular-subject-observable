import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  myTextVal: string;

  constructor(private appService: AppService){}

  sendTextValue(){
    this.appService.passValue(this.myTextVal);
  }
}
