import { html } from '~/utils';
import { TrackItem } from '~/views';
import './AlbumCard.css';

export function AlbumCard(
  album: AlbumData,
  albumIndex: number,
  player: PlayerType,
  audioElement: HTMLAudioElement
) {
  const tracksList = album.tracks
    .map((track, index) => {
      return TrackItem(track, albumIndex, index, player, audioElement);
    })
    .join('');

  return html`<div class="AlbumCard">
    <div class="AlbumCardHeader">
      <img class="AlbumCardCover" src=${album.cover} />
      <div class="AlbumCardHeaderInfo">
        <h1 class="AlbumTitle">${album.title}</h1>
        <h2 class="AlbumArtist">${album.artist}</h2>
      </div>
    </div>
    <div class="AlbumCardTracks">${tracksList}</div>
    </div>
  </div>`;
}
