import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type CardColor = 'black' | 'white' | 'wild';
type CardType =
  | 'skip'
  | 'reverse'
  | 'wild'
  | 'freeze'
  | 'shield'
  | 'double-move'
  | 'normal';

interface UnoChessCard {
  color: CardColor;
  type: CardType;
  description: string;
}

@Component({
  selector: 'app-uno-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './uno-card.html',
  styleUrl: './uno-card.css',
})
export class UnoCardComponent {
  unoChessDeck: UnoChessCard[] = [
    { color: 'black', type: 'skip', description: 'White skips a turn.' },
    { color: 'white', type: 'skip', description: 'Black skips a turn.' },
    {
      color: 'wild',
      type: 'wild',
      description: 'cancel any effect.',
    },
    { color: 'black', type: 'reverse', description: 'Play order is reversed.' },
    { color: 'white', type: 'reverse', description: 'Play order is reversed.' },
    {
      color: 'black',
      type: 'freeze',
      description: 'Freeze one enemy piece for 1 turn.',
    },
    {
      color: 'white',
      type: 'freeze',
      description: 'Freeze one enemy piece for 1 turn.',
    },
    {
      color: 'wild',
      type: 'shield',
      description: 'Protect a piece from being captured for 1 turn.',
    },
    {
      color: 'wild',
      type: 'double-move',
      description: 'You may move two pieces this turn.',
    },

    {
      color: 'black',
      type: 'normal',
      description: 'You may play normally this round',
    },
    {
      color: 'white',
      type: 'normal',
      description: 'You may play normally this round',
    },

    {
      color: 'black',
      type: 'wild',
      description:
        'Teleport one of your pieces anywhere on the board (within valid move rules).',
    },

    {
      color: 'white',
      type: 'wild',
      description:
        'Teleport one of your pieces anywhere on the board (within valid move rules).',
    },

    {
      color: 'black',
      type: 'wild',
      description:
        "Choose a square — opponent can't move a piece there for 2 turns.",
    },

    {
      color: 'white',
      type: 'wild',
      description:
        "Choose a square — opponent can't move a piece there for 2 turns.",
    },

    {
      color: 'black',
      type: 'wild',
      description:
        "If opponent doesn't capture a piece in 3 turns, they lose a random piece.",
    },

    {
      color: 'white',
      type: 'wild',
      description:
        "If opponent doesn't capture a piece in 3 turns, they lose a random piece.",
    },

    {
      color: 'black',
      type: 'wild',
      description: 'You must remove one of your own pawns immediately.',
    },

    {
      color: 'white',
      type: 'wild',
      description: 'You must remove one of your own pawns immediately.',
    },

    {
      color: 'black',
      type: 'wild',
      description: 'You must remove one of your own pawns immediately.',
    },

    {
      color: 'white',
      type: 'wild',
      description: 'You must remove one of your own pawns immediately.',
    },

    {
      color: 'black',
      type: 'wild',
      description: 'Bring back one piece you previously lost (except king).',
    },
    {
      color: 'white',
      type: 'wild',
      description: 'Bring back one piece you previously lost (except king).',
    },

    {
      color: 'black',
      type: 'wild',
      description: 'You may move two pawns this turn.',
    },

    {
      color: 'white',
      type: 'wild',
      description: 'You may move two pawns this turn.',
    },

    {
      color: 'black',
      type: 'wild',
      description:
        'Opponent must mirror your move on their next turn if possible.',
    },

    {
      color: 'white',
      type: 'wild',
      description:
        'Opponent must mirror your move on their next turn if possible.',
    },

    {
      color: 'black',
      type: 'wild',
      description:
        'Move the same piece twice in a single turn (like a double move).',
    },

    {
      color: 'white',
      type: 'wild',
      description:
        'Move the same piece twice in a single turn (like a double move).',
    },

    {
      color: 'black',
      type: 'wild',
      description: 'Freeze all knights for one round.',
    },

    {
      color: 'white',
      type: 'wild',
      description: 'Freeze all knights for one round.',
    },

    {
      color: 'white',
      type: 'wild',
      description:
        'Both players must reveal their next planned move before acting and actually perform that move.',
    },
  ];

  drawnCard: UnoChessCard | null = null;

  drawCard(): void {
    const index = Math.floor(Math.random() * this.unoChessDeck.length);

    this.drawnCard = this.unoChessDeck[index];
  }
}
