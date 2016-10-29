import {Component, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {Comment} from "../shared/comment.model";

@Component({
	selector: 'comment-form',
	templateUrl: './app/comments/comment-form/comment-form.component.html',
	styleUrls:  ['./app/comments/comment-form/comment-form.component.css']
})
export class CommentFormComponent {

	@Output() onSubmit: EventEmitter<any> = new EventEmitter();

	@ViewChild('message') message: ElementRef;
	@ViewChild('email') email: ElementRef;
	@ViewChild('commentForm') commentForm: any;

	private model: Comment = new Comment();

	add(value: any):void {
		this.onSubmit.emit({comment: this.model});
		this.commentForm.form.reset();
	}
}



