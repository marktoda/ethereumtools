import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import config from '../shared/util/config';

@Injectable()
export class InfuraService {
	infuraUrls = config.infuraProject;

	constructor(private http: HttpClient, private router: Router) {	}

	public broadcastTransaction(tx: string, env: string): Observable<any> {
		const infuraUrl = this.infuraUrls[env];

		const post_body = {
			jsonrpc: "2.0",
			method: "eth_sendRawTransaction",
			params: [tx],
			id: 1,
		}
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		}
		return this.http.post<any>(infuraUrl, post_body, options)
	}
}
