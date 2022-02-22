import { Album } from './Album';

export class Playlist implements PlaylistType {
  private _albums: AlbumType[];

  constructor() {
    this._albums = [];
  }

  addAlbum(data: AlbumData) {
    let album: AlbumType = new Album(data);  
    this._albums.push(album);
  }

  isFirstAlbum(index: number): boolean {
    return index === 0;
  }

  isLastAlbum(index: number): boolean {
    return index === this._albums.length - 1;
  }

  public get albums(): AlbumType[] {
    return this._albums;
  }
}