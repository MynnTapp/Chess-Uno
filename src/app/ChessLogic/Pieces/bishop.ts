import { Color, Coords, FENChar } from '../models';
import { Piece } from './Piece';

export class Bishop extends Piece {
  protected override _FENChar: FENChar;
  protected override _directions: Coords[] = [
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: -1 },
    { x: -1, y: 1 },
  ];

  constructor(private pieceColor: Color) {
    super(pieceColor);
    this._FENChar =
      pieceColor === Color.Black ? FENChar.WhiteBishop : FENChar.BlackBishop;
  }
}
