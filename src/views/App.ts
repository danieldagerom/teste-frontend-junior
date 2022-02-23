import { html } from '~/utils';
import albums from '~/mocks/albums.json';
import { Player } from '~/models/Player';
import { Header, PlayerBar } from './';
import './App.css';

export function App() {
  const player = new Player();
  const audioElement = new Audio();
  
  // TEMP
  player.playlist.addAlbum(albums[0]);
  audioElement.setAttribute('src', player.trackUrl || '');

  audioElement.addEventListener('onplayclick', () => {
    if (player.playlist.albums.length > 0 ) {
      player.playing ? audioElement.play() : audioElement.pause();
    } else {
      alert('Playlist vazia')
    }
  });

  audioElement.addEventListener('ontrackchange', () => {
    audioElement.setAttribute('src', player.trackUrl || '');
  });

  return html`
    <div class="App">${Header()} ${PlayerBar(player, audioElement)}</div>
  `;
}
