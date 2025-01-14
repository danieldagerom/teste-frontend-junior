export class Album implements AlbumType {
  private _artist: string;
  private _cover: string;
  private _title: string;
  private _tracks: TrackData[];

  constructor(albumData: AlbumData) {
    this._artist = albumData.artist;
    this._cover = albumData.cover;
    this._title = albumData.title;
    this._tracks = albumData.tracks;
  }

  isFirstTrack(index: number): boolean {
    return index === 0;
  }

  isLastTrack(index: number): boolean {
    return index === this._tracks.length - 1;
  }

  getUrlFromIndex(index: number): string | null {
    const url = this._tracks[index]?.url;
    return url || null;
  }

  public get artist(): string {
    return this._artist;
  }

  public get cover(): string {
    return this._cover;
  }

  public get title(): string {
    return this._title;
  }

  public get tracks(): TrackData[] {
    return this._tracks;
  }
}