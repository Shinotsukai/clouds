import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../services/firestore.service'
import {imgItem} from '../models/imgItem';

@Component({
  selector: 'ons-page[gallery-tab]',
  templateUrl: './gallery-tab.component.html',
  styleUrls: ['./gallery-tab.component.css']
})
export class GalleryTabComponent implements OnInit {

  galleryImages: imgItem[];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getImages().subscribe(image => {
      this.galleryImages = image;
    })
  }

  deleteImage(galleryImage){
    console.log('deleted?')
    this.firestoreService.deleteImage(galleryImage);
  }

}
