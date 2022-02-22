import { html } from '~/utils';
import { PlayButton } from '~/views';
import './PlayerBar.css';

export function PlayerBar(player: PlayerType, audioElement: HTMLAudioElement) {
  return html`<div class="PlayerBar">
    ${PlayButton(player, audioElement)}
  </div>`;
}
