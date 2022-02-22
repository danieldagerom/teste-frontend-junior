import { html, mounted } from '~/utils';
import './PlayButton.css';

export function PlayButton(player: PlayerType, audioElement: HTMLAudioElement) {
  mounted(function () {
    const playButton =
      document.querySelector<HTMLHeadingElement>('.PlayButton');
    const playButtonIcon =
      document.querySelector<HTMLHeadingElement>('.PlayButtonIcon');

    playButton?.addEventListener('click', () => {
      player.playing ? player.pause() : player.play();
      const playClickEvent = new Event('onplayclick');
      playButtonIcon?.dispatchEvent(playClickEvent);
      audioElement.dispatchEvent(playClickEvent);
    });

    playButtonIcon?.addEventListener('onplayclick', () => {
      playButtonIcon.setAttribute(
        'src',
        player.playing ? '/img/pause.svg' : '/img/play.svg'
      );
    });
  });

  return html`<button class="PlayButton">
    <img class="PlayButtonIcon" src="/img/play.svg" />
  </button>`;
}
