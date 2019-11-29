import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';
import {imgItem} from '../models/imgItem';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  imageCollection: AngularFirestoreCollection<imgItem>;
  imageItem: Observable<imgItem[]>;
  imageDoc:AngularFirestoreDocument<imgItem>;

  constructor(public afs: AngularFirestore) {

    this.imageCollection = this.afs.collection('images');
    // this.imageItem = this.afs.collection('images').valueChanges();
    this.imageItem = this.imageCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as imgItem;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getImages(){
     return this.imageItem;
   }

   addImage(imageFile: imgItem){
     this.imageCollection.add(imageFile);
   }

   deleteImage(image:imgItem){
     this.imageDoc = this.afs.doc(`images/${image.id}`);
     this.imageDoc.delete();
   }


}
