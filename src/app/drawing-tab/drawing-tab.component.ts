import { Component, OnInit, ViewChild,HostListener,Renderer } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { imgItem } from '../models/imgItem';

@Component({
  selector: 'ons-page[drawing-tab]',
  templateUrl: './drawing-tab.component.html',
  styleUrls: ['./drawing-tab.component.css']
})
export class DrawingTabComponent implements OnInit {

  @ViewChild('drawingCanvas', {static: false}) canvas: any;
  @HostListener('window:resize', ['$event'])
  canvasElement: any;
  screenHeight: number;
  screenWidth: number;

  lastX: Number;
  lastY: Number;

  currentColour: String = "#00a8ff";
  availableColours: any;

  brushSize: Number = 5;

  imageFile: imgItem ={
    name: '',
    image: ''
  };



  bgURL = window.webkitURL || window.URL;


  constructor(public renderer:Renderer, private firestoreService: FirestoreService) { 
    this.getScreenSize();

    this.availableColours = [
      '#00a8ff', '#9c88ff', '#fbc531', '#4cd137', '#e84118', '#718093'
    ]
  }

  ngOnInit() {

  }

  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
}

  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;

    this.renderer.setElementAttribute(this.canvasElement, 'width', this.screenWidth + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.screenHeight + '');
  }


  onFileChange(event){
    let ctx = this.canvasElement.getContext('2d');
    var bgweb = this.bgURL.createObjectURL(event.target.files[0]);
    var backgroundImg = new Image();
    backgroundImg.onload = function(){
      ctx.drawImage(backgroundImg,0,0,ctx.canvas.width,ctx.canvas.height)
    }
    backgroundImg.src = bgweb;
    console.log(event);
  }

  changeColour(colour){
    this.currentColour = colour;
  }

  clearBoard(){
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
  }

  changeSize(size){
    this.brushSize = size;
  }

  startDrawing(ev){
    console.log(ev);

    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  moveDrawing(ev){
    console.log(ev);

    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;

    ctx.beginPath();
    ctx.lineJoin = "round"
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();
    
    this.lastX = currentX;
    this.lastY = currentY;
  }

  endDrawing(ev){
    console.log(ev);
  }

  convertDrawing(){
    var dataUrl = this.canvasElement.toDataURL();

    let newName = new Date().getTime()+'.png';

    var data = dataUrl.split(',')[1];
    // let blob = this.b64toBlob(data,'image/png');

    this.imageFile.name = newName;
    this.imageFile.image = dataUrl;   

  }

  saveDrawing(){

    this.convertDrawing()
    console.log(this.imageFile)
    

    this.firestoreService.addImage(this.imageFile);

    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
  }


//   b64toBlob(b64Data, contentType) {
//     contentType = contentType || '';
//     var sliceSize = 512;
//     var byteCharacters = atob(b64Data);
//     var byteArrays = [];
   
//     for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//       var slice = byteCharacters.slice(offset, offset + sliceSize);
   
//       var byteNumbers = new Array(slice.length);
//       for (var i = 0; i < slice.length; i++) {
//         byteNumbers[i] = slice.charCodeAt(i);
//       }
   
//       var byteArray = new Uint8Array(byteNumbers);
   
//       byteArrays.push(byteArray);
//     }
   
//     var blob = new Blob(byteArrays, { type: contentType });
//     return blob;
//   }
 }
