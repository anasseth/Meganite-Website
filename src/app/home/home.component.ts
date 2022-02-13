import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faEnvelop = faEnvelope;
  faMapMarker = faMapMarkerAlt;
  faCartPlus = faCartPlus;
  videoURL: string = "https://www.youtube.com/embed/-8XU8KyebTU";
  safeURL: any = "";
  activeProduct = "";
  showProduct:boolean=false;

  constructor(private _sanitizer: DomSanitizer, private wowService: NgwWowService) {
    // this.wowService.init();
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit(): void {
    this.wowService.init();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  clickProduct(event: any) {
    this.showProduct = true;
    console.log(event.target)
    console.log(event.target.src.slice(event.target.src.indexOf("assets")))
    this.activeProduct = "../../"+event.target.src.slice(event.target.src.indexOf("assets"))
  }

  hideProduct(){
    this.showProduct = false
  }

}
