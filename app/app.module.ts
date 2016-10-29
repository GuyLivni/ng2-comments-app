import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {CommentsModule} from "./comments/comments.module";
import {SharedModule} from "./shared/shared.module";
import {CommentsComponent} from "./comments/comments.component";

@NgModule({
	imports: [
		BrowserModule,
		CommentsModule,
		SharedModule
	],
	declarations: [
		AppComponent,
		CommentsComponent
	],
	providers: [

	],
	exports: [
		SharedModule
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
