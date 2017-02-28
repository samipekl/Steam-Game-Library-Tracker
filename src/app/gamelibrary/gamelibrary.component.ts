import { Router } from '@angular/router';
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
  private logged: any = false;
  private i: any = 0;
  private gamelog: any = [];

  constructor(private steamWorks: SteamworksService, private IGDB: IGDBService, private router: Router) { }



  ngOnInit() {
if (localStorage.getItem('id') === null) {
    this.router.navigate(['gsearch']);
} else {
    console.log(localStorage.getItem('id'));
    this.steamWorks.getGames().subscribe(
      (res) => {
        console.log(res);
        this.games = res.response.games;
        console.log(this.games);

      }
    );
    this.logged = true;
  }
if (this.logged === true) {
  /*for ( this.i = 0; this.i < this.games.length; this.i++) {*/
    this.IGDB.getGames('Thief').subscribe(
      (res) => {
        console.log(res);
      }
    );

}
  }
}
