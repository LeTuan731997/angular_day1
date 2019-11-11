import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas;

  public width = 400;
  public height = 400;
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


    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    image.onload = () => {
      this.cx.drawImage(image, 0, 0, this.width, this.height);
    }
    image.src = this.url;
  }

  zoomIn() {
    this.width = this.width + 100;
    this.height = this.height + 100;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d')!;
    let image = new Image();


    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    image.onload = () => {
      this.cx.drawImage(image, 0, 0, this.width, this.height);
    }
    image.src = this.url;
  }

  zoomOut() {
    this.width = this.width - 100;
    this.height = this.height - 100;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d')!;
    let image = new Image();


    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    image.onload = () => {
      this.cx.drawImage(image, 0, 0, this.width, this.height);
    }
    image.src = this.url;
  }

  // onSelectFile(event) {
  //   if (event.target.files.length > 0) {
  //     console.log(event.target.files[0].name);
  //     this.url = 'assets/images/' + event.target.files[0].name;
  //     this.getImage();
  //   }
  // }
}
