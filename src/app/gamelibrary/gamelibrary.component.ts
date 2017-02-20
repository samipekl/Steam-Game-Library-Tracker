import { IGDBService } from './../services/igdb.service';
import { SteamworksService } from './../services/steamworks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamelibrary',
  templateUrl: './gamelibrary.component.html',
  styleUrls: ['./gamelibrary.component.scss']
})
export class GamelibraryComponent implements OnInit {

  private games: any = {};
  private user: any = {};
  private key: any = '9646ACD0D9D80E4ABCF5059BF3C7BA79';
  private url: any = '';

  constructor(private steamWorks: SteamworksService, private IGDB: IGDBService) { }



  ngOnInit() {
if (localStorage.getItem('steamId') !== null) {
  console.log(this.steamWorks.getGames(localStorage.getItem('steamId')))
}
  }
}
