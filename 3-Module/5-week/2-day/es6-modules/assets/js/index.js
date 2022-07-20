// import PotatoGame from './game.js';
import { Game } from './game.js';

window.onload = () => {
  const game = new Game();
  // const game = new PotatoGame();
  game.start();
};
