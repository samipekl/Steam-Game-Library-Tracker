import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class IGDBService {
private url: string = ``;
private xKey: string= `Fng1rTAYUfmshdMDHKCNyFLoNbuAp1V9fTCjsnDk0Ua2El3FIJ`;


  constructor(private http: Http) { }
getGames = (gamename) => {
  console.log('Hello');
  this.url = `https://igdbcom-internet-game-database-v1.p.mashape.com/games/?search=${gamename}&fields=id,name,keywords,themes,genres`;
  const headers = new Headers({ 'X-Mashape-Key': this.xKey });
  const options = new RequestOptions({headers: headers});
  console.log('Goodbye');
    return this.http.get(this.url, options)
    .map(resp => resp.json());
  }

getKeys = (kId) => {
  this.url = `https://igdbcom-internet-game-database-v1.p.mashape.com/keywords/${kId}?fields=name`;
  const headers = new Headers({ 'X-Mashape-Key': this.xKey });
  const options = new RequestOptions({headers: headers});
  return this.http.get(this.url, options)
  .map(resp => resp.json());
}

getThemes = (tId) => {
  this.url = `https://igdbcom-internet-game-database-v1.p.mashape.com/themes/${tId}?fields=name`;
  const headers = new Headers({ 'X-Mashape-Key': this.xKey });
  const options = new RequestOptions({headers: headers});
  return this.http.get(this.url, options)
  .map(resp => resp.json());

}

getGenres = (gId) => {
  this.url = `https://igdbcom-internet-game-database-v1.p.mashape.com/genres/${gId}?fields=name`;
  const headers = new Headers({ 'X-Mashape-Key': this.xKey });
  const options = new RequestOptions({headers: headers});
  return this.http.get(this.url, options)
  .map(resp => resp.json());
}
}

