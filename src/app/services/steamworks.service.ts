import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SteamworksService {
  private url: string = 'https://api.steampowered.com';



  constructor(private http: Http) { }
getGames = (sId) => {
    return this.http.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=9646ACD0D9D80E4ABCF5059BF3C7BA79&include_appinfo=1&include_played_free_games=1&steamid=${sId}`)
    .map(resp => resp.json())
  }
}

