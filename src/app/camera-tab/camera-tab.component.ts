import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ons-page[camera-tab]',
  templateUrl: './camera-tab.component.html',
  styleUrls: ['./camera-tab.component.css']
})
export class CameraTabComponent implements OnInit {

  @ViewChild('cameraCap', {static: false}) cameraCap: any;
  camera: any;
  

  constructor() { }
  


  ngOnInit() {
  }

  ngAfterViewInit() {

    this.camera = this.cameraCap.nativeElement;

    
}

  openCamera(){
    this.initCamera({audio: false, video: { facingMode: { exact: "environment" } }});
  }

  initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.cameraCap.src = window.URL.createObjectURL(stream);
      this.cameraCap.play();
    });
  }

}
