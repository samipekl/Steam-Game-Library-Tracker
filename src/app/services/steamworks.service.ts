import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SteamworksService {
private userId: any = '76561198030015039';
  private key: any = '9646ACD0D9D80E4ABCF5059BF3C7BA79';
private url: string = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${this.key}&include_appinfo=1&include_played_free_games=1&steamid=${this.userId}`


  constructor(private http: Http) { }
getGames = () => {
  const headers = new Headers({ 'Content-type': 'application/json' });
  const options = new RequestOptions({headers: headers});
  this.resp.setHeader()
    return this.http.get(this.url, options)
    .map(resp => resp.json());
  }
}

