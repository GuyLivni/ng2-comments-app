import {Md5}        from 'ts-md5/dist/md5';
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";

@Injectable()
export class GravatarService {

	generate(email, size): Observable<any> {
		var gravatarUrl = "http://www.gravatar.com/avatar/";
		return new Observable((observer: any) => {
			observer.next(gravatarUrl + Md5.hashStr(email) + "?size=" + size);
		})
	}
}