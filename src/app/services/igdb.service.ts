import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class IGDBService {
private url: string = ``


  constructor(private http: Http) { }
getGames = (gamename) => {
  this.url = `https://igdbcom-internet-game-database-v1.p.mashape.com/games/?search=${gamename}&fields=id,name,keywords,themes,genres`
  const headers = new Headers({ 'X-Mashape-Key': '38RcdzIK0zmshlymrWXuCBMp3GJXp16Wa0Njsnq2labY9sILFJ' });
  const options = new RequestOptions({headers: headers});
    return this.http.get(this.url, options)
    .map(resp => resp.json());
  }
}

