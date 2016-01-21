import {Component} from 'angular2/core';

declare var Foundation:any;

//---------- Components --------//

    //----------
    @Component({
        selector: 'my-app',
        template: `
        <ul class="vertical menu" data-accordion-menu>
          <li>
            <a href="#">Item 1</a>
            <ul class="menu veritcal nested">
              <li><a href="#">Item 1A</a></li>
              <li><a href="#">Item 1B</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Item 2</a>
            <ul class="menu veritcal nested">
              <li><a href="#">Item 2A</a></li>
              <li><a href="#">Item 2B</a></li>
            </ul>
          </li>
        </ul>
        `
    })
    export class AppComponent {
        constructor() {
            console.log(this)
            var elem = new Foundation.AccordionMenu($('.vertical') );
        }
    }
    //----------

    //----------
    @Component({
        selector: 'ng-header',
        template: `
            <h1>Hello {{name}}</h1>
            <button (click)="sayMyName()">Say my name</button>
        `

    })
    export class HeaderComponent {
        // declare for typescript
        name: string;

        // constructor
        constructor() {
          this.name = 'George'
        }

        //functions
        sayMyName() {
          console.log('My name is', this.name)
        }

    }
    //----------





//-------------------------------//
