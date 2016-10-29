import {Component, Input} from "@angular/core";
import {Comment} from "../shared/comment.model";

@Component({
	selector: 'comment-item',
	templateUrl: './app/comments/comment-item/comment-item.component.html',
	styleUrls:  ['./app/comments/comment-item/comment-item.component.css']
})
export class CommentItemComponent {
	@Input() comment: Comment;
}