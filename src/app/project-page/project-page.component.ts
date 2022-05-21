import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  faEnvelop = faEnvelope;
  faMapMarker = faMapMarkerAlt;
  faCartPlus = faCartPlus;
  videoURL: string = "https://www.youtube.com/embed/-8XU8KyebTU";
  safeURL: any = "";
  activeGalleryImage = "";
  activeIndex = -1;
  showHover: boolean = false;
  galleryData=[
    {
      imgSrc:"../../assets/New-Page/TT001-Rosy-Terrazzo-min 1.png",
      name:"TT001 ROSY TERRAZZO"
    },
    {
      imgSrc:"../../assets/New-Page/TT002-Serenity-Terrazzo-min 1.png",
      name:"TT002 SERENITY TERRAZZO"
    },
    {
      imgSrc:"../../assets/New-Page/TT003-Aqua-Terrazzo-min.png",
      name:"TT003 AQUA TERRAZZO"
    },
    {
      imgSrc:"../../assets/New-Page/TT004-Alpi-Terrazzo-min.png",
      name:"TT004 ALPI TERRAZZO"
    },
    {
      imgSrc:"../../assets/New-Page/TT005-Vintage-Terrazzo-min.png",
      name:"TT005 VINTAGE TERRAZZO"
    },
    {
      imgSrc:"../../assets/New-Page/TT006-Caramel-Terrazzo-min.png",
      name:"TT006 CARAMEL TERRAZZO"
    },
    {
      imgSrc:"../../assets/New-Page/TT007S-Urban-Terrazzo-min.png",
      name:"TT007S URBAN TERRAZZO"
    },
  ]

  constructor(private _sanitizer: DomSanitizer, private wowService: NgwWowService) {
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
    autoHeight: true,
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

  clickProduct(data: any, i: any) {
    this.showHover = true;
    this.activeIndex = i;
    this.activeGalleryImage = data.imgSrc
  }

  hideProduct() {
    this.activeIndex = -1
    this.showHover = false
  }
}
