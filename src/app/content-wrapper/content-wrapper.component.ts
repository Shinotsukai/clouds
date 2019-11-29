import { Component, OnInit } from '@angular/core';
import { GalleryTabComponent } from '../gallery-tab/gallery-tab.component';
import { DrawingTabComponent } from '../drawing-tab/drawing-tab.component';
import { CameraTabComponent } from '../camera-tab/camera-tab.component';

@Component({
  selector: 'ons-page[content-wrapper]',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  constructor() { }

  galleryTab = GalleryTabComponent;
  drawingTab = DrawingTabComponent;
  cameraTab = CameraTabComponent;

  ngOnInit() {
  }

}
