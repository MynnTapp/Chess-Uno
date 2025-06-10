import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoard } from '../../ChessLogic/chess-board';
import { FENChar, Color } from '../../ChessLogic/models';

@Component({
  selector: 'app-chess-board',
  imports: [CommonModule],
  templateUrl: './chess-board.html',
  styleUrl: './chess-board.css',
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color {
    return this.chessBoard.playerColor;
  }
}
