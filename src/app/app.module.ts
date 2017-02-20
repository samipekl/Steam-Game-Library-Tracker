import { IGDBService } from './services/igdb.service';
import { SteamworksService } from './services/steamworks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { GamelibraryComponent } from './gamelibrary/gamelibrary.component';
import { PSearchComponent } from './psearch/psearch.component';
import { GSearchComponent } from './gsearch/gsearch.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SafePipe } from './pipes/safe.pipe';

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
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [SteamworksService, IGDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
