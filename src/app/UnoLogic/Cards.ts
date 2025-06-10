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

const unoChessDeck: UnoChessCard[] = [
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
];

function drawUnoChessCard(): UnoChessCard {
  const index = Math.floor(Math.random() * unoChessDeck.length);
  return unoChessDeck[index];
}

function onDrawCardClick() {
  const card = drawUnoChessCard();
  alert(
    `Card drawn: ${card.color.toUpperCase()} - ${card.type.toUpperCase()} \n${
      card.description
    }`
  );
}
