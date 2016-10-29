import {Pipe} from "@angular/core";
@Pipe({
	name:"searchFilter"
})

export class CommentSearchPipe{

	transform (value, term) {
		if(typeof term === "undefined"){
			return value;
		}
		return value.filter(item=>
			item.email.toLowerCase().indexOf(term.toLowerCase()) !== -1
		)
	}
}