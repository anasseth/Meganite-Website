import { Component } from '@angular/core';
import { GlobalService } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meganite-website';
  showPopup: boolean = false

  constructor(
    public global:GlobalService
  ){

  }
}
