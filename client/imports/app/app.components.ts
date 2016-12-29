import { Component } from '@angular/core';

import template from './app.components.html';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
 parties: any[];

 constructor(){
  this.parties = [
    {'name': 'Awesome party',
     'description': 'Awesome stuff',
      'location': 'Space'
    },
    {'name': 'Another one',
     'description':'Gonna be lit',
     'location': 'London'
    }
  ];
 }
}
