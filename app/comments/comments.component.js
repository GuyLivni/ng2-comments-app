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
var core_1 = require('@angular/core');
var comment_service_1 = require("./shared/comment.service");
var comment_model_1 = require("./shared/comment.model");
var CommentsComponent = (function () {
    function CommentsComponent(commentService) {
        this.commentService = commentService;
        this.comments$ = this.commentService.get();
    }
    CommentsComponent.prototype.add = function (event) {
        this.commentService.add(new comment_model_1.Comment(event.comment)).subscribe();
    };
    CommentsComponent = __decorate([
        core_1.Component({
            selector: 'comments-container',
            templateUrl: './app/comments/comments.component.html',
            styleUrls: ['./app/comments/comments.component.css']
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentsComponent);
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;
//# sourceMappingURL=comments.component.js.map