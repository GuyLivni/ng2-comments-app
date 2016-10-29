import {NgModule} from "@angular/core";
import {GravatarComponent} from "./components/gravatar.component";
import {GravatarService} from "./components/gravatar.service";

@NgModule({
	imports: [
	],
	declarations: [
		GravatarComponent
	],
	providers: [
		GravatarService
	],
	exports : [
		GravatarComponent
	]

})
export class SharedModule {}