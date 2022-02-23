import { html, mounted } from '~/utils';
import './NextButton.css';

export function NextButton(player: PlayerType, audioElement: HTMLAudioElement) {
  mounted(() => {
    const nextButton =
      document.querySelector<HTMLHeadingElement>('.NextButton');

    nextButton?.addEventListener('click', () => {
      if (player.playlist.albums.length > 0) {
        player.nextTrack();
        const changeTrackEvent = new Event('ontrackchange');
        audioElement.dispatchEvent(changeTrackEvent);
      }
    });
  });

  return html`<button class="NextButton">
    <img class="NextButtonIcon" src="/img/next.svg" />
  </button>`;
}
