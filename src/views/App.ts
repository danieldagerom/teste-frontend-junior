import { html } from '~/utils';
import { Player } from '~/models/Player';
import { Header, PlayerBar } from './';
import './App.css';

export function App() {
  const player = new Player();

  const audioElement = new Audio(
    'https://www.netmundi.org/home/wp-content/uploads/2017/08/beethoven_moonlight_sonata.mp3'
  );
  audioElement.addEventListener('onplayclick', () => {
    player.playing ? audioElement.play() : audioElement.pause();
  });

  return html`
    <div class="App">
      ${Header()}
      ${PlayerBar(player, audioElement)}
    </div>
  `;
}
