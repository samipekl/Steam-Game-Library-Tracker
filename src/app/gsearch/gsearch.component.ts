import { SteamworksService } from './../services/steamworks.service';
import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-gsearch',
  templateUrl: './gsearch.component.html',
  styleUrls: ['./gsearch.component.scss']
})
export class GSearchComponent implements OnInit {

  private user: any = '';

  constructor(private router: Router) { }

  setSteamId = (formValues: any) => {
    console.log(formValues);
    localStorage.setItem('id', JSON.stringify(formValues));
    this.router.navigate(['gamelibrary']);
  }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    console.log(localStorage.getItem('id'));
    this.router.navigate(['gamelibrary']);
    }
  }

}
