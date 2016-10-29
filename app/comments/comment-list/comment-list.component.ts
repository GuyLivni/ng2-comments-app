import {Input, Component} from "@angular/core";


@Component({
	selector:"comment-list",
	templateUrl: './app/comments/comment-list/comment-list.component.html',
	styleUrls:  ['./app/comments/comment-list/comment-list.component.css']
})
export class CommentListComponent {
	@Input() comments: any[];
	@Input() emailAdd;
}