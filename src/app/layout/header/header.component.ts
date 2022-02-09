import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showRegionChange: boolean = true;
  activatedLink: string = "";
  faHamburger = faBars;
  faGlobe = faGlobe;

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
