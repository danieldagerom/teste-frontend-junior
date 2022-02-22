import { Playlist } from './Playlist';

export class Player implements PlayerType {
  private _playing: boolean;
  private _playlist: PlaylistType;
  private _albumIndex: number;
  private _trackIndex: number;

  constructor() {
    this._playing = false;
    this._playlist = new Playlist();
    this._albumIndex = 0;
    this._trackIndex = 0;
  }

  play(): void {
    this._playing = true;
  }

  pause(): void {
    this._playing = false;
  }

  nextTrack(): void {
    if (
      this._playlist.isLastAlbum(this.albumIndex) &&
      this._playlist.albums[this.albumIndex].isLastTrack(this.trackIndex)
    ) {
      this.albumIndex = 0;
      this.trackIndex = 0;
    } else if (
      this._playlist.albums[this.albumIndex].isLastTrack(this.trackIndex)
    ) {
      this.albumIndex++;
      this.trackIndex = 0;
    } else {
      this.trackIndex++;
    }
  }

  prevTrack(): void {
    if (
      this._playlist.isFirstAlbum(this.albumIndex) &&
      this._playlist.albums[this.albumIndex].isFirstTrack(this.trackIndex)
    ) {
      this.albumIndex = this._playlist.albums.length - 1;
      this.trackIndex =
        this._playlist.albums[this.albumIndex].tracks.length - 1;
    } else if (
      this._playlist.albums[this.albumIndex].isFirstTrack(this.trackIndex)
    ) {
      this.albumIndex--;
      this.trackIndex =
        this._playlist.albums[this.albumIndex].tracks.length - 1;
    } else {
      this.trackIndex--;
    }
  }

  public get album(): AlbumType | null {
    return this._playlist.albums[this.albumIndex] || null;
  }

  public get playing(): boolean {
    return this._playing;
  }

  public get playlist(): PlaylistType {
    return this._playlist;
  }

  public get trackUrl(): string | null {
    return (
      this._playlist.albums[this.albumIndex].getUrlFromIndex(this.trackIndex) ||
      null
    );
  }

  public set albumIndex(index: number) {
    if (index > this._playlist.albums.length - 1) {
      this._albumIndex = 0;
    } else {
      this._albumIndex = index;
    }
  }

  public get albumIndex(): number {
    return this._albumIndex;
  }

  public set trackIndex(index: number) {
    if (index > this._playlist.albums[this.albumIndex].tracks.length - 1) {
      this._albumIndex = 0;
    } else {
      this._trackIndex = index;
    }
  }

  public get trackIndex(): number {
    return this._trackIndex;
  }
}
