import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  musics = [];
  addToMusic(music) {
    this.musics.push(music);
  }

  getItems() {
    return this.musics;
  }

  clearMusic() {
    this.musics = [];
    return this.musics;
  }
  constructor() { }
}
