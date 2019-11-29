import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ons-page[camera-tab]',
  templateUrl: './camera-tab.component.html',
  styleUrls: ['./camera-tab.component.css']
})
export class CameraTabComponent implements OnInit {

  @ViewChild('video', {static: false}) video: any;

  constructor() { }
  


  ngOnInit() {
  }

  public ngAfterViewInit() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { exact: "environment" } } }).then(stream => {
            this.video.nativeElement.src = window.URL.createObjectURL(stream);
            this.video.nativeElement.play();
        });
    }
}

  openCamera(){

  }

}
