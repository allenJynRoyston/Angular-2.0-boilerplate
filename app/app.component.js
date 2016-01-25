System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var HeaderComponent, AccordionComponent1, AccordionComponent2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //---------- Components --------//
            //----------
            HeaderComponent = (function () {
                // constructor
                function HeaderComponent() {
                    this.name = 'Allen';
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-header',
                        directives: [common_1.NgClass],
                        template: "\n            <h1>Hello {{name}}</h1>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
            //----------
            //---------- toggle page dimmer
            AccordionComponent1 = (function () {
                // constructor
                function AccordionComponent1(elementRef) {
                    this.elementRef = elementRef;
                }
                //functions
                AccordionComponent1.prototype.ngOnInit = function () {
                    jQuery(this.elementRef.nativeElement).accordion();
                };
                AccordionComponent1 = __decorate([
                    core_1.Component({
                        selector: 'accordion-component-1',
                        template: "\n        <div class=\"ui styled accordion\">\n          <div class=\"active title\">\n            <i class=\"dropdown icon\"></i>\n            What is a dog?\n          </div>\n          <div class=\"active content\">\n            <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n          </div>\n          <div class=\"title\">\n            <i class=\"dropdown icon\"></i>\n            What kinds of dogs are there?\n          </div>\n          <div class=\"content\">\n            <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n          </div>\n          <div class=\"title\">\n            <i class=\"dropdown icon\"></i>\n            How do you acquire a dog?\n          </div>\n          <div class=\"content\">\n            <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n            <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n          </div>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AccordionComponent1);
                return AccordionComponent1;
            })();
            exports_1("AccordionComponent1", AccordionComponent1);
            //----------
            //---------- toggle page dimmer
            AccordionComponent2 = (function () {
                // constructor
                function AccordionComponent2(elementRef) {
                    this.elementRef = elementRef;
                }
                //functions
                AccordionComponent2.prototype.ngOnInit = function () {
                    jQuery(this.elementRef.nativeElement).accordion();
                };
                AccordionComponent2 = __decorate([
                    core_1.Component({
                        selector: 'accordion-component-2',
                        template: "\n        <div class=\"ui styled accordion\">\n          <div class=\"active title\">\n            <i class=\"dropdown icon\"></i>\n            What is a dog?\n          </div>\n          <div class=\"active content\">\n            <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n          </div>\n          <div class=\"title\">\n            <i class=\"dropdown icon\"></i>\n            What kinds of dogs are there?\n          </div>\n          <div class=\"content\">\n            <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n          </div>\n          <div class=\"title\">\n            <i class=\"dropdown icon\"></i>\n            How do you acquire a dog?\n          </div>\n          <div class=\"content\">\n            <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n            <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n          </div>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AccordionComponent2);
                return AccordionComponent2;
            })();
            exports_1("AccordionComponent2", AccordionComponent2);
        }
    }
});
//----------
//-------------------------------//
//# sourceMappingURL=app.component.js.map