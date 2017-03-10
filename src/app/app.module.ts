<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { IGDBService } from './services/igdb.service';
import { SteamworksService } from './services/steamworks.service';
>>>>>>> SB1
>>>>>>> a680f7c6768d53d2ea99bf11d4f95cdb4216c101
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a680f7c6768d53d2ea99bf11d4f95cdb4216c101

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
<<<<<<< HEAD
=======
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
>>>>>>> a680f7c6768d53d2ea99bf11d4f95cdb4216c101
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule
  ],
  providers: [],
=======
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
>>>>>>> a680f7c6768d53d2ea99bf11d4f95cdb4216c101
  bootstrap: [AppComponent]
})
export class AppModule { }
