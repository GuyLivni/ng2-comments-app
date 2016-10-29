import {Component, Output, EventEmitter, ElementRef} from "@angular/core";
import {Observable} from "rxjs/Rx";

@Component({
	selector: "comment-search",
	templateUrl: './app/comments/comment-search/comment-search.component.html',
	styleUrls:  ['./app/comments/comment-search/comment-search.component.css']


})
export class CommentSearchComponent{
	@Output() update: EventEmitter<any> = new EventEmitter();
	public inputValue: string;

	constructor(private elementRef: ElementRef) {
		const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
			.map(() => this.inputValue)
			.debounceTime(500)
			.distinctUntilChanged();

		eventStream.subscribe(input => this.update.emit(input));
	}
}