"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var CommentSearchComponent = (function () {
    function CommentSearchComponent(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.update = new core_1.EventEmitter();
        var eventStream = Rx_1.Observable.fromEvent(elementRef.nativeElement, 'keyup')
            .map(function () { return _this.inputValue; })
            .debounceTime(500)
            .distinctUntilChanged();
        eventStream.subscribe(function (input) { return _this.update.emit(input); });
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CommentSearchComponent.prototype, "update", void 0);
    CommentSearchComponent = __decorate([
        core_1.Component({
            selector: "comment-search",
            templateUrl: './app/comments/comment-search/comment-search.component.html',
            styleUrls: ['./app/comments/comment-search/comment-search.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CommentSearchComponent);
    return CommentSearchComponent;
}());
exports.CommentSearchComponent = CommentSearchComponent;
//# sourceMappingURL=comment-search.component.js.map