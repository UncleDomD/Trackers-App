import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GunTableComponent } from './components/gun-table/gun-table.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LegoGamesComponent } from './components/lego-games/lego-games.component';

const routes: Routes = [
    {path: '', redirectTo: '/mainMenu', pathMatch: 'full'},
    {path: 'mainMenu', component: MainMenuComponent},
    {path: 'camoGrind', component: GunTableComponent},
    {path: 'legoGames', component: LegoGamesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GunTableComponent,
    MainMenuComponent,
    LegoGamesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
