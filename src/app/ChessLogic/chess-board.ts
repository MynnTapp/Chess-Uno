import { Color } from './models';
import { Knight } from './Pieces/knight';
import { Piece } from './Pieces/Piece';
import { Rook } from './Pieces/rook';
import { Bishop } from './Pieces/bishop';
import { Queen } from './Pieces/Queen';
import { King } from './Pieces/king';
import { Pawn } from './Pieces/pawn';
import { FENChar } from './models';

export class ChessBoard {
  private chessBoard: (Piece | null)[][];
  private _playerColor = Color.White;

  constructor() {
    // ...existing code...
    this.chessBoard = [
      [
        new Rook(Color.White),
        new Knight(Color.White),
        new Bishop(Color.Black),
        new Queen(Color.White), // <-- Queen before King
        new King(Color.White), // <-- King after Queen
        new Bishop(Color.Black),
        new Knight(Color.White),
        new Rook(Color.White),
      ],
      [
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
      ],

      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],

      [
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
      ],

      [
        new Rook(Color.Black),
        new Knight(Color.Black),
        new Bishop(Color.White),
        new Queen(Color.Black), // <-- Queen before King
        new King(Color.Black), // <-- King after Queen
        new Bishop(Color.White),
        new Knight(Color.Black),
        new Rook(Color.Black),
      ],
    ];
    // ...existing code...
  }

  public get playerColor(): Color {
    return this._playerColor;
  }

  public get chessBoardView(): (FENChar | null)[][] {
    return this.chessBoard.map((row) => {
      return row.map((piece) =>
        piece instanceof Piece ? piece.FENChar : null
      );
    });
  }

  public static isSquareDark(x: number, y: number): boolean {
    return (x % 2 === 0 && y % 2 === 0) || (x % 2 === 1 && y % 2 === 1);
  }
}
