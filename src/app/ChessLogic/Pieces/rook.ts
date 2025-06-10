import { FENChar, Coords, Color } from '../models';
import { Piece } from './Piece';

export class Rook extends Piece {
  protected override _FENChar: FENChar;
  private _hasMoved: boolean = false;
  protected override _directions: Coords[] = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];

  constructor(private pieceColor: Color) {
    super(pieceColor);
    this._FENChar =
      pieceColor === Color.Black ? FENChar.BlackRook : FENChar.WhiteRook;
  }

  public get hasMoved(): boolean {
    return this._hasMoved;
  }

  public set hasMoved(_) {
    this._hasMoved = true;
  }
}
