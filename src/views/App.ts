import { html } from '~/utils';
import albums from '~/mocks/albums.json';
import { Player } from '~/models/Player';
import { Header, AlbumsList, PlayerBar } from '~/views';
import './App.css';

export function App() {
  const player = new Player();
  player.playlist.addAlbum(albums[0]);
  player.playlist.addAlbum(albums[1]);

  const audioElement = new Audio(player.trackUrl || undefined);

  audioElement.addEventListener('onplayclick', () => {
    if (player.playlist.albums.length > 0 ) {
      player.playing ? audioElement.play() : audioElement.pause();
    } else {
      alert('Playlist vazia');
    }
  });

  audioElement.addEventListener('ontrackchange', () => {
    audioElement.setAttribute('src', player.trackUrl || '');
    player.playing ? audioElement.play() : audioElement.pause();
  });

  return html`
    <div class="App">
      ${Header()}
      ${AlbumsList(player, audioElement)}
      ${PlayerBar(player, audioElement)}
    </div>
  `;
}
