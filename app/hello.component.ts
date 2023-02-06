import { Component, Input } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  name: string;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.stringSubject.subscribe(
      data => 
      {
        console.log('next subscribed value: ' + data);
        this.name = data;
      }
    );
  }
}
