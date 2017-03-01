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
  private logged = 0;
  private i: any = 0;
  private id: any = {};
  private gamelog: any = [];
  private gName: string;

  constructor(private steamWorks: SteamworksService, private IGDB: IGDBService, private router: Router) { }



  ngOnInit() {
this.logged = 0;
if (localStorage.getItem('id') === null) {
    this.router.navigate(['gsearch']);
} else {
    console.log(localStorage.getItem('id'));
    this.id = JSON.parse(localStorage.getItem('id'));
    this.steamWorks.setUser(this.id.steamId);
    this.steamWorks.getGames().subscribe(
      (res) => {
        console.log(res);
        this.games = res.response.games;
        console.log(this.games)
        console.log(this.games[0].name);
        for ( this.i = 0; this.i < this.games.length; this.i = this.i + 1 ) {
          console.log(this.i);
          console.log(this.games[this.i].name);
          if (this.games[this.i].name !== null) {
    this.gName = this.games[this.i].name;
    this.IGDB.getGames(this.games[this.i].name).subscribe(
      (res) => {
        console.log(res[0]);
      }
    );
          } else {
            console.log("Not Found")
          }

}

      }
    );
}
  }

}

