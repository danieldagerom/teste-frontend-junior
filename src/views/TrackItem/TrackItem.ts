import { html, mounted } from '~/utils';
import './TrackItem.css';

export function TrackItem(
  track: any,
  albumIndex: number,
  trackIndex: number,
  player: PlayerType,
  audioElement: HTMLAudioElement
) {
  mounted(() => {
    const track = document.querySelector<HTMLHeadingElement>(
      `#${albumIndex.toString() + '-' + trackIndex.toString()}`
    );

    track?.addEventListener('click', () => {
      if (player.playlist.albums.length > 0) {
        player.albumIndex = albumIndex;
        player.trackIndex = trackIndex;

        const changeTrackEvent = new Event('ontrackchange');
        audioElement.dispatchEvent(changeTrackEvent);
      }
    });
  });

  const isTrackActive =
    albumIndex === player.albumIndex && trackIndex === player.trackIndex
      ? 'active'
      : '';

  return html`<div
    id=${albumIndex.toString() + '-' + trackIndex.toString()}
    class="AlbumCardTrack ${isTrackActive}"
  >
    ${trackIndex + 1}. ${track.title}
  </div>`;
}
