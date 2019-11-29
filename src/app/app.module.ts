import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore'

import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { GalleryTabComponent } from './gallery-tab/gallery-tab.component';
import { DrawingTabComponent } from './drawing-tab/drawing-tab.component';
import { LoginComponent } from './login/login.component';

import { FirestoreService } from './services/firestore.service';
import { CameraTabComponent } from './camera-tab/camera-tab.component'

@NgModule({
  declarations: [
    AppComponent,
    ContentWrapperComponent,
    GalleryTabComponent,
    DrawingTabComponent,
    LoginComponent,
    CameraTabComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Clouds'),
    AngularFirestoreModule
  ],
  entryComponents:[LoginComponent,ContentWrapperComponent,GalleryTabComponent,DrawingTabComponent,CameraTabComponent],
  providers: [FirestoreService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  bootstrap: [AppComponent],
})
export class AppModule { }
