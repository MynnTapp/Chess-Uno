import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChessBoardComponent } from './modules/chess-board/chess-board';
import { UnoCardComponent } from './uno-card/uno-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChessBoardComponent, UnoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ChessUno-game';
}
