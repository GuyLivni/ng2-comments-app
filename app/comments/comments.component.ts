import { Component }       from '@angular/core';
import { CommentService }  from "./shared/comment.service";
import { Comment }         from "./shared/comment.model"

@Component({
	selector: 'comments-container',
	templateUrl: './app/comments/comments.component.html',
	styleUrls:  ['./app/comments/comments.component.css']
})
export class CommentsComponent {

	comments$ = this.commentService.get();

	constructor(private commentService: CommentService) {}

	add(event){
		this.commentService.add(new Comment(event.comment)).subscribe();
	}
}



