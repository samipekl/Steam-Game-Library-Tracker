import { DomSanitizer } from '@angular/platform-browser';
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
  private allgames: any = [];
  private i: any = 0;
  private id: any = {};
  private gamelog: any = [];
  private set: any = [0, 0, 0, 0, 0, 0];
  private tagLog: any = [];
  private sorted: any = "false";
  private selected: string = "";

  constructor(private steamWorks: SteamworksService, private IGDB: IGDBService, private router: Router, private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.sorted = 'false';
    localStorage.setItem('sorted', this.sorted);
    if (localStorage.getItem('id') === null) {
      this.router.navigate(['gsearch']);
    } else if (localStorage.getItem('userGames') === null) {
      this.id = JSON.parse(localStorage.getItem('id'));
      this.steamWorks.setUser(this.id.steamId);
      this.steamWorks.getGames().subscribe(
        (res) => {
          this.games = res.response.games;
          // localStorage.setItem('userGames', JSON.stringify(this.games));
          console.log(this.games);
          for (let game of this.games) {
            game.tags = [];
            // this.set = [0, 0, 0, 0, 0, 0];
            // console.log(game.name);
            if (game.name !== null) {
              this.IGDB.getGames(game.name).subscribe(
                (res) => {
                  // console.log(res);
                  game.keywordIds = res[0].keywords;
                  game.genreIds = res[0].genres;
                  game.themeIds = res[0].themes;
                  game.GDname = res[0].name;
                  game.launchUrl = `steam://run/${game.appid}`
                  // this.set[0] = 1;
                  if (game.keywordIds !== "undefined") {
                    // console.log(game.keywordIds);
                    for (let ID of game.keywordIds) {
                      this.IGDB.getKeys(ID).subscribe(
                        (res) => {
                          // console.log(res);
                          game.tags.push(res[0].name);
                          this.tagLog.push(res[0].name);
                        }
                      );
                    }
                  } else {
                    console.log('No Keywords')
                  }
                  if (game.genreIds !== "undefined") {
                    // console.log(game.genreIds);
                    for (let ID of game.genreIds) {
                      this.IGDB.getGenres(ID).subscribe(
                        (res) => {
                          console.log(res);
                          game.tags.push(res[0].name);
                        }
                      );
                    }
                  } else {
                    console.log('No Genres');
                  }
                  if (game.themeIds !== 'undefined') {
                    // console.log(game.themeIds);
                    for (let ID of game.themeIds) {
                      this.IGDB.getThemes(ID).subscribe(
                        (res) => {
                          // console.log(res);
                          game.tags.push(res[0].name);
                          localStorage.setItem('userGames', JSON.stringify(this.games));
                          this.tagLog = this.tagLog.sort();
                          localStorage.setItem('tagLog', JSON.stringify(this.tagLog));
                          this.allgames = this.games;
                        }
                      );
                    }
                  }
                }
              );
            } else {
              console.log("Not Found");
            }
          }
        }
      );
    } else {
      this.games = JSON.parse(localStorage.getItem('userGames'));
      this.allgames = this.games;
      this.tagLog = JSON.parse(localStorage.getItem('tagLog'));
    }
  }
  private trusted = (game) => {
    return this.sanitizer.bypassSecurityTrustUrl(game.launchUrl);
  };
  private filtering = (Ftag) => {
    if (this.selected != Ftag) {
    this.selected = Ftag;
    this.games = this.allgames.filter(function (game) {
          for (let tag of game.tags) {
            if (tag === Ftag) {
              return game;
            }
          }
        }
      );
      console.log(this.games);
    } else {
      this.games = this.allgames;
    }
  }
}
/*function sanitize(url:string) {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}*/
/*  }
}

} else {
  this.games = JSON.parse(localStorage.getItem('userGames'));
}
  }
}
}*/
