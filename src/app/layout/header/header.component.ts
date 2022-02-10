import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { faSquareX } from '@fortawesome/free-solid-svg-icons';

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
  faAngleRight = faAngleRight;
  faCart = faCartPlus;
  activeMenu = "Product";
  showDropdownMobile: boolean = false
  dropdownMenu = [
    {
      name: "Specification",
      items: [
        {
          menuName: "3-Part CSI Guide",
          class: "one"
        },
        {
          menuName: "Lunch & Learn",
          class: "one"
        },
        {
          menuName: "Revit Files",
          class: "one"
        },
        {
          menuName: "Technical Documents",
          class: "two"
        },
        {
          menuName: "Brochure",
          class: "two"
        },
        {
          menuName: "Fabrication Videos",
          class: "two"
        },
      ]
    },
    {
      name: "Product",
      items: [
        {
          menuName: "Solid Surface",
          class: "one"
        },
        {
          menuName: "Sinks",
          class: "one"
        },
        {
          menuName: "Antimicrobial AcryMed",
          class: "one"
        },
        {
          menuName: "Healthcare",
          class: "two"
        },
        {
          menuName: "Antimicrobial",
          class: "two"
        },
        {
          menuName: "Franchise",
          class: "two"
        },
      ]
    },
    {
      name: "Inspiration",
      items: [
        {
          menuName: "Project",
          class: "one"
        },
        {
          menuName: "Franchise",
          class: "one"
        },
        {
          menuName: "Commercial",
          class: "one"
        },
        {
          menuName: "Education",
          class: "two"
        },
        {
          menuName: "HealthCare",
          class: "two"
        },
      ]
    }
  ]
  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

  showCountryPopup() {
    this.global.showPopup = true
  }

  switchMenu(keyName: string) {
    console.log(keyName)
    this.activeMenu = keyName
    this.getMenuItems();
  }

  getMenuItems() {
    console.log("KeyName : ", this.activeMenu)
    console.log(this.dropdownMenu.filter(x => x.name.toLowerCase().toString() == this.activeMenu.toLowerCase().toString())[0].items)
    return this.dropdownMenu.filter(x => x.name.toLowerCase().toString() == this.activeMenu.toLowerCase().toString())[0].items
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
