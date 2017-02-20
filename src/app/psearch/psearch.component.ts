import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psearch',
  templateUrl: './psearch.component.html',
  styleUrls: ['./psearch.component.scss']
})
export class PSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
