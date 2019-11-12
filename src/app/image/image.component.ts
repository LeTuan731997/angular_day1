import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-90deg)' })),
    ])
  ]
})
export class ImageComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas;

  public width = 500;
  public height = 400;
  public ratio = 1;

  state: string = 'default';
  currentInputSelect: string = '4';
  url: string = 'assets/images/small/img-2.jpg';
  private cx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    this.getImage();
  }
  public getImage() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d')!;
    let image = new Image();

    image.src = this.url;
    
    
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    image.onload = () => {
        this.width = image.width * this.ratio ;
        this.height = image.height * this.ratio;
        canvasEl.width = this.width;
        canvasEl.height = this.height;
      this.cx.drawImage(image, 0, 0, this.width, this.height);
    }
   

  }

  onSelectFile(event) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0].name);
      this.url = 'assets/images/' + event.target.files[0].name;
      this.getImage();
    }
  }
  onChange(){
      console.log(this.currentInputSelect);
      if (this.currentInputSelect === '1') {
        this.ratio= 0.1;
        this.getImage();
      }
      if (this.currentInputSelect === '2') {
        this.ratio= 0.5;
        this.getImage();
      }
      if (this.currentInputSelect === '3') {
        this.ratio= 0.75;
        this.getImage();
      }
      if (this.currentInputSelect === '4') {
        this.ratio= 1;
        this.getImage();
      }
      if (this.currentInputSelect === '5') {
        this.ratio= 1.2;
        this.getImage();
      }
      if (this.currentInputSelect === '6') {
        this.ratio= 1.5;
        this.getImage();
      }
      if (this.currentInputSelect === '7') {
        this.ratio= 2;
        this.getImage();
      }
      
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  
}
