import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showRegionChange: boolean = true;
  activatedLink: string = "";

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

  showCountryPopup() {
    this.global.showPopup = true
  }

  showRegionPopup() {
    this.global.showRegion = !this.global.showRegion
  }

  showDropdown() {
    if (this.activatedLink == '') {
      this.activatedLink = "Product"
    }
    else {
      this.activatedLink = '';
    }
  }

}
