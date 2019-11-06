import { Component, OnInit } from '@angular/core';
import { ListMusic } from '../list-music';
import { LISTMUSIC } from '../mock-list-music';

@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
    show: boolean = false;
    newName:'';
    newAthor:'';
    listMusic = LISTMUSIC;
    selectSong: ListMusic;
    onSelect(a: ListMusic): void {
        this.selectSong = a;
    }
    onShowList(){
        this.show = !this.show;
    }
    constructor() { }

    ngOnInit() {
    }

    addMusic() {
        this.listMusic.unshift({
            id: this.listMusic.length+1,
            name: this.newName,
            author: this.newAthor,
        });
        console.log(this.listMusic);
    }

    removeMusic() {
        let a = this.listMusic.findIndex(selectSong =>selectSong.id === selectSong.id);
        this.listMusic.splice(a,1);
        return this.selectSong;
    }

}
