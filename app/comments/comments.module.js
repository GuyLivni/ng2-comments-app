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
var comment_form_component_1 = require("./comment-form/comment-form.component");
var comment_list_component_1 = require("./comment-list/comment-list.component");
var comment_item_component_1 = require("./comment-item/comment-item.component");
var comment_search_pipe_1 = require("./comment-search/comment-search.pipe");
var comment_search_component_1 = require("./comment-search/comment-search.component");
var comment_service_1 = require("./shared/comment.service");
var shared_module_1 = require("../shared/shared.module");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var CommentsModule = (function () {
    function CommentsModule() {
    }
    CommentsModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                comment_form_component_1.CommentFormComponent,
                comment_list_component_1.CommentListComponent,
                comment_item_component_1.CommentItemComponent,
                comment_search_pipe_1.CommentSearchPipe,
                comment_search_component_1.CommentSearchComponent
            ],
            providers: [
                comment_service_1.CommentService
            ],
            exports: [
                comment_form_component_1.CommentFormComponent,
                comment_list_component_1.CommentListComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CommentsModule);
    return CommentsModule;
}());
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map