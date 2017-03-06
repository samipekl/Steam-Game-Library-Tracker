import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SteamworksService {
private userId: string;
  private key: any = '9646ACD0D9D80E4ABCF5059BF3C7BA79';
private url: string = ``
private done: any = false;


  constructor(private http: Http) { }
setUser = (ID: string) => {
   this.userId = ID;
    localStorage.setItem('steamUser', JSON.stringify(ID));
}

userCheck = (checker) => {
  if (checker === 1)  {
  if (this.userId === null) {
    return false;
  } else {
    console.log(this.userId);
    return true;
  }
} else if (checker === 2) {
  return this.done;
  }
}

getGames = () => {
  this.done = false;
  const headers = new Headers({ 'Content-type': 'application/json' });
  const options = new RequestOptions({headers: headers});
  /*this.resp.setHeader()*/
  this.url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${this.key}&include_appinfo=1&include_played_free_games=1&steamid=${this.userId}`;
  this.done = true;
    return this.http.get(this.url)
    .map(resp => resp.json());
  }
}

