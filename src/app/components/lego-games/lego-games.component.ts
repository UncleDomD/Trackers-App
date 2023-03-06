import { Component, OnInit } from '@angular/core';
import { LegoGame } from 'src/app/common/lego-game';
import { LegoService } from 'src/app/services/lego.service';

@Component({
  selector: 'app-lego-games',
  templateUrl: './lego-games.component.html',
  styleUrls: ['./lego-games.component.css']
})
export class LegoGamesComponent implements OnInit {

  constructor(private legoService: LegoService) { }

  legoGames: LegoGame[] = [];
  updateGameToggle = false;
  legoGame: LegoGame = new LegoGame;
  currentGameId: any;

  ngOnInit(): void {
    this.listGames();
  }

  listGames() {
    this.legoService.loadLegoGames().subscribe(
      data => {
        this.legoGames = data;
      }
    )
  }

  updateGameToggler(gId: number) {
    switch(this.updateGameToggle) {
      case false:
        this.updateGameToggle = true;
        this.legoService.getGameById(gId).subscribe((legoGame: any) => {
          this.legoGame = legoGame;
        })
        this.currentGameId = gId;
        break;
      default:
        this.updateGameToggle = false;  
    }
  }

  updateGame(gId: number) {
    this.legoService.updateGameById(gId, this.legoGame).subscribe({
      next: (legoGame) => {
        this.legoGame = legoGame;
        this.reloadPage();
      }
    })
  }

  reloadPage(): void {
    window.location.reload();
  }

}
