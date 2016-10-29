import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Comment} 	from "../shared/comment.model"

@Injectable()
export class CommentService {

	private _comments: Comment[] = [
		new Comment({
			email: 'guylivni@gmail.com',
			message: 'Hello there!'
		})
	];

	add(comment: Comment){
		return new Observable((observer: any) => {
			this._comments.push(comment);
			observer.next(this._comments);
		});
	}

	get(){
		return new Observable((observer: any) => {
			observer.next(this._comments);
		});
	}

}