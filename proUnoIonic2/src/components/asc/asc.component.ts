import { Component } from '@angular/core';

/**
 * Generated class for the Asc component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'asc',
  templateUrl: 'asc.component.html'
})
export class AscComponent {

  text: string;

  constructor() {
    console.log('Hello Asc Component');
    this.text = 'Hello Alex';
  }

}
