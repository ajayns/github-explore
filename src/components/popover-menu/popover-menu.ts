import { Component } from '@angular/core';

@Component({
  selector: 'popover-menu',
  templateUrl: 'popover-menu.html'
})
export class PopoverMenuComponent {

  text: string;

  constructor() {
    console.log('Hello PopoverMenuComponent Component');
    this.text = 'Hello World';
  }

}
