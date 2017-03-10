import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tagbar',
  templateUrl: './tagbar.component.html',
  styleUrls: ['./tagbar.component.scss']
})
export class TagbarComponent implements OnInit {

private tagLog: any = [];
  constructor() { }

  ngOnInit() {

      this.tagLog = JSON.parse(localStorage.getItem('tagLog'));
  }

}
