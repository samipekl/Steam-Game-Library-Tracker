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

  private games: any = [];
  private i: any = 0;
  private id: any = {};
  private gamelog: any = [];

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
        console.log(this.games)
        for ( let game of this.games) {
          console.log(game);
          if (game.name !== null) {
            this.IGDB.getGames(game.name).subscribe(
              (res) => {
                game.keywordsIds = res[0].keywords;
                game.genresIds = res[0].genres;
                game.themesIds = res[0].themes;
                game.GDname = res[0].name;
              }
            );
          } else {
            console.log("Not Found")
          }

}
        for ( let game of this.games ) {
          console.log('ChooCH00Xhoo!!!')
          if ( game.genresIds !== null ) {
            console.log(game['name']);
            /*for ( let ID of game.genresIds ) {
            this.IGDB.getGenres(ID).subscribe(
              (res) => {
                game.genres.push(res.name);
              }
            )
            }*/
          }
        }

      }
    );
}
  }
}

