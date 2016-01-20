import {Component} from 'angular2/core';

//---------- Components --------//

    //----------
    @Component({
        selector: 'my-app',
        template: `
        <div class="callout primary">
          <h5>This is a secondary panel</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a href="#">It's dangerous to go alone, take this.</a>
        </div>
        `
    })
    export class AppComponent { }
    //----------

    //----------
    @Component({
        selector: 'ng-header',
        template: '<h1>The Header</h1>'
    })
    export class HeaderComponent { }
    //----------


//-------------------------------//
