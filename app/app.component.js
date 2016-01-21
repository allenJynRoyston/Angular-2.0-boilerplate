System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //---------- Components --------//
            //----------
            AppComponent = (function () {
                function AppComponent() {
                    console.log(this);
                    var elem = new Foundation.AccordionMenu($('.vertical'));
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <ul class=\"vertical menu\" data-accordion-menu>\n          <li>\n            <a href=\"#\">Item 1</a>\n            <ul class=\"menu veritcal nested\">\n              <li><a href=\"#\">Item 1A</a></li>\n              <li><a href=\"#\">Item 1B</a></li>\n            </ul>\n          </li>\n          <li>\n            <a href=\"#\">Item 2</a>\n            <ul class=\"menu veritcal nested\">\n              <li><a href=\"#\">Item 2A</a></li>\n              <li><a href=\"#\">Item 2B</a></li>\n            </ul>\n          </li>\n        </ul>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            //----------
            //----------
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.name = 'George';
                }
                HeaderComponent.prototype.sayMyName = function () {
                    console.log('My name is', this.name);
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-header',
                        template: "\n            <h1>Hello {{name}}</h1>\n            <button (click)=\"sayMyName()\">Say my name</button>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//----------
//-------------------------------//
//# sourceMappingURL=app.component.js.map