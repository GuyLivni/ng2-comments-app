import {Component, Input, Injectable} from "@angular/core";
import {GravatarService} from "./gravatar.service";

@Component({
	selector: "gl-gravatar",
	templateUrl: './app/shared/components/gravatar.component.html',
	styleUrls:  ['./app/shared/components/gravatar.component.css']
})

@Injectable()
export class GravatarComponent {

	public imgUrl: string;
	@Input() size: number = 80;

	@Input() set email(value: any) {
		if(typeof value !== "undefined") {
			this.getImage(value);
		}
	}

	constructor(public gravatarService: GravatarService) {
	}

	getImage(email) {
		this.gravatarService.generate(email, this.size).subscribe(
			result => this.imgUrl = result
		)
	}
}