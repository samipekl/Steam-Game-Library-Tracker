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
  private i: any = 0;
  private id: any = {};
  private gamelog: any = [];
  private gName: string;
  private log: any = {};

  constructor(private steamWorks: SteamworksService, private IGDB: IGDBService, private router: Router) { }



  ngOnInit() {
if (localStorage.getItem('id') === null) {
    this.router.navigate(['gsearch']);
} else {
    this.id = JSON.parse(localStorage.getItem('id'));
    this.steamWorks.setUser(this.id.steamId);
    this.steamWorks.getGames().subscribe(
      (res) => {
        this.games = res.response.games;
        /*console.log(this.games)*/
        for ( this.i = 0; this.i < 3; this.i = this.i + 1 ) {
          console.log(this.i);
          console.log(this.games[this.i].name);
          if (this.games[this.i].name !== null) {
    this.gName = this.games[this.i].name;
    this.IGDB.getGames(this.games[this.i].name).subscribe(
      (res) => {
        this.log = res;
        console.log(this.log[0].genres);
        this.games[this.i].keywords = this.log[0].keywords;
        this.games[this.i].genres = this.log[0].genres[0];
        this.games[this.i].themes = this.log[0].themes[0];
        console.log(this.games[this.i]);
    console.log('Choochoo');
      }
    );
          } else {
            console.log("Not Found")
          }

}

        /*console.log(this.games[4]);*/

      }
    );
}
  }
}

