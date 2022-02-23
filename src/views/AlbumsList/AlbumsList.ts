import { html } from '~/utils';
import { AlbumCard } from '~/views';

export function AlbumsList(player: PlayerType, audioElement: HTMLAudioElement) {
  const albumsList = player.playlist.albums.map((album, index) => {
    return AlbumCard(album, index, player, audioElement);
  }).join('');

  return html`<div class="AlbumsList">${albumsList}</div>`;
}
