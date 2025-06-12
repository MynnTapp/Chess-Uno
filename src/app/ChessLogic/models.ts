export enum Color {
  White,
  Black,
}

export type Coords = {
  x: number;
  y: number;
};

export enum FENChar {
  WhitePawn = 'P',
  WhiteKnight = 'N',
  WhiteBishop = 'B',
  WhiteRook = 'R',
  WhiteQueen = 'Q',
  WhiteKing = 'K',
  BlackPawn = 'p',
  BlackKnight = 'n',
  BlackBishop = 'b',
  BlackRook = 'r',
  BlackQueen = 'q',
  BlackKing = 'k',
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]:
    'assets/455c71d093694dc313ec7f5aabede35d-pawn-cute-chess-dark-piece-color-stroke.png',

  [FENChar.WhiteKnight]:
    'assets/knight-cute-chess-dark-piece-color-stroke-180db1.png',

  [FENChar.WhiteBishop]:
    'assets/219df820d4b5f4ece831092e0eb2f3c2-bishop-cute-chess-dark-piece-color-stroke.png',

  [FENChar.WhiteRook]:
    'assets/rook-cute-chess-dark-piece-color-stroke-high-vector-42946862.png',
  [FENChar.WhiteQueen]:
    'assets/f25a4398e08aa9ae1e2aa8fb6a82be80-queen-cute-chess-dark-piece-color-stroke.png',
  [FENChar.WhiteKing]:
    'assets/8e0d5c471276d5b511c1dceb2bb38e61-king-cute-chess-dark-piece-color-stroke.png',
  [FENChar.BlackPawn]:
    'assets/272cfb359f33f8ef92e873083645bdd7-pawn-cute-chess-dark-piece-cut-out.png',
  [FENChar.BlackKnight]:
    'assets/knight-cute-chess-dark-piece-cut-out-c63799.png',
  [FENChar.BlackBishop]:
    'assets/0b71861556391061c90f7630d41da3af-bishop-cute-chess-dark-piece-cut-out.png',
  [FENChar.BlackRook]:
    'assets/32653e5ef882f9e2b8190764638a36e0-rook-cute-chess-dark-piece-cut-out.png',
  [FENChar.BlackQueen]:
    'assets/queen-cute-chess-dark-piece-cut-out-vector-48958880.png',
  [FENChar.BlackKing]:
    'assets/89eaa2db806c782125ca7275800119b0-king-cute-chess-dark-piece-cut-out.png',
};
