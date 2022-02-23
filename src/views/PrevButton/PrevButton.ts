import { html, mounted } from '~/utils';
import './PrevButton.css';

export function PrevButton(player: PlayerType, audioElement: HTMLAudioElement) {
  mounted(() => {
    const prevButton =
      document.querySelector<HTMLHeadingElement>('.PrevButton');

    prevButton?.addEventListener('click', () => {
      if (player.playlist.albums.length > 0) {
        player.prevTrack();
        const changeTrackEvent = new Event('ontrackchange');
        audioElement.dispatchEvent(changeTrackEvent);
      }
    });
  });

  return html`<button class="PrevButton">
    <img class="PrevButtonIcon" src="/img/prev.svg" />
  </button>`;
}
