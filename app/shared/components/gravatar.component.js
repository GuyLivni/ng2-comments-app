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
var gravatar_service_1 = require("./gravatar.service");
var GravatarComponent = (function () {
    function GravatarComponent(gravatarService) {
        this.gravatarService = gravatarService;
        this.size = 80;
    }
    Object.defineProperty(GravatarComponent.prototype, "email", {
        set: function (value) {
            if (typeof value !== "undefined") {
                this.getImage(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    GravatarComponent.prototype.getImage = function (email) {
        var _this = this;
        this.gravatarService.generate(email, this.size).subscribe(function (result) { return _this.imgUrl = result; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GravatarComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], GravatarComponent.prototype, "email", null);
    GravatarComponent = __decorate([
        core_1.Component({
            selector: "gl-gravatar",
            templateUrl: './app/shared/components/gravatar.component.html',
            styleUrls: ['./app/shared/components/gravatar.component.css']
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [gravatar_service_1.GravatarService])
    ], GravatarComponent);
    return GravatarComponent;
}());
exports.GravatarComponent = GravatarComponent;
//# sourceMappingURL=gravatar.component.js.map