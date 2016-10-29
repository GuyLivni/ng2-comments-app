import {NgModule} from "@angular/core";
import {CommentFormComponent} from "./comment-form/comment-form.component";
import {CommentListComponent} from "./comment-list/comment-list.component";
import {CommentItemComponent} from "./comment-item/comment-item.component";
import {CommentSearchPipe} from "./comment-search/comment-search.pipe";
import {CommentSearchComponent} from "./comment-search/comment-search.component";
import {CommentService} from "./shared/comment.service";
import {SharedModule} from "../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
	imports: [
		FormsModule,
		BrowserModule,
		SharedModule
	],
	declarations: [
		CommentFormComponent,
		CommentListComponent,
		CommentItemComponent,
		CommentSearchPipe,
		CommentSearchComponent
	],
	providers: [
		CommentService
	],
	exports: [
		CommentFormComponent,
		CommentListComponent
	]
})

export class CommentsModule {}