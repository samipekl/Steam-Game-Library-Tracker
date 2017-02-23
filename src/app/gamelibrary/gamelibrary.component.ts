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

  constructor(private steamWorks: SteamworksService, private IGDB: IGDBService, private router: Router) { }



  ngOnInit() {
if (localStorage.getItem('id') === null) {
    this.router.navigate(['gsearch']);
} else {
    console.log(localStorage.getItem('id'));
    this.steamWorks.getGames().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
}
}
