<<<<<<< HEAD
=======
import { IGDBService } from './services/igdb.service';
import { SteamworksService } from './services/steamworks.service';
>>>>>>> SB1
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
=======
import { RouterModule, Router, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { GamelibraryComponent } from './gamelibrary/gamelibrary.component';
import { PSearchComponent } from './psearch/psearch.component';
import { GSearchComponent } from './gsearch/gsearch.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SafePipe } from './pipes/safe.pipe';
import { TagbarComponent } from './tagbar/tagbar.component';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/gsearch'
  },
  {
    path: 'gsearch',
    component: GSearchComponent
  },
  {
    path: 'psearch',
    component: PSearchComponent
  },
  {
    path: 'gamelibrary',
    component: GamelibraryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GamelibraryComponent,
    PSearchComponent,
    GSearchComponent,
    TopBarComponent,
    SafePipe,
    TagbarComponent
>>>>>>> SB1
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule
  ],
  providers: [],
=======
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [SteamworksService, IGDBService],
>>>>>>> SB1
  bootstrap: [AppComponent]
})
export class AppModule { }
