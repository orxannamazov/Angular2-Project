System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(element, renderer) {
                    this.isClassVisible = false;
                    this.onVoted = new core_1.EventEmitter();
                    this.element = element.nativeElement;
                    this.renderer = renderer;
                }
                HighlightDirective.prototype.onMouseEnter = function () {
                    console.log('Akif abi');
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    console.log('Orhan');
                };
                HighlightDirective.prototype.onClick = function () {
                    // var card = $(this).parent('.material-card');
                    console.log(this.isClassVisible);
                    this.isClassVisible = !this.isClassVisible;
                    // this.onVoted.emit(this.isClassVisible);
                };
                __decorate([
                    core_1.Input('myHighlight'), 
                    __metadata('design:type', Object)
                ], HighlightDirective.prototype, "myHandler", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HighlightDirective.prototype, "onVoted", void 0);
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        host: {
                            '(click)': 'onClick()'
                        }
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});
//# sourceMappingURL=my-highlight.js.map