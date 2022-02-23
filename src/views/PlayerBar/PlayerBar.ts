import { html } from '~/utils';
import { PlayButton, NextButton, PrevButton } from '~/views';
import './PlayerBar.css';

export function PlayerBar(player: PlayerType, audioElement: HTMLAudioElement) {
  return html`<div class="PlayerBar">
    ${PrevButton(player, audioElement)}
    ${PlayButton(player, audioElement)}
    ${NextButton(player, audioElement)}
  </div>`;
}
