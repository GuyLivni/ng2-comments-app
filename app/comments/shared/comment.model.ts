export class Comment {

	email:     string;
	message:   string;

	constructor(
		data: {
			email?:    string,
			message?:  string
		} = {}
	){
		this.email = data.email || '';
		this.message = data.message || '';
	}
}