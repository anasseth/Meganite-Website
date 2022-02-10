import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faAngleRight = faAngleRight;
  faAngleDown = faAngleDown
  showAbout: boolean = false;
  showConnect: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAbout() {
    this.showAbout = !this.showAbout
  }
  toggleConnect() {
    this.showConnect = !this.showConnect
  }


}
