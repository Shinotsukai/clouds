import { Component, OnInit } from '@angular/core';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';

@Component({
  selector: 'ons-page[login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pushPage() {
    (document.getElementById('mainNavi') as any).pushPage(ContentWrapperComponent, { animation: 'slide' });
  }

}
