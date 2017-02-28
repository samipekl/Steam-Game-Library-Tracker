import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class IGDBService {
private url: string = `https://igdbcom-internet-game-database-v1.p.mashape.com/games/1942?fields=name`


  constructor(private http: Http) { }
getGames = () => {
  const headers = new Headers({ 'X-Mashape-Key': '38RcdzIK0zmshlymrWXuCBMp3GJXp16Wa0Njsnq2labY9sILFJ' });
  const options = new RequestOptions({headers: headers});
    return this.http.get(this.url, options)
    .map(resp => resp.json());
  }
}

