import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  faEnvelop = faEnvelope;
  faMapMarker = faMapMarkerAlt;
  faCartPlus = faCartPlus;
  videoURL: string = "https://www.youtube.com/embed/-8XU8KyebTU";
  safeURL: any = "";
  activeProduct = "";
  activeIndex = -1;
  showProduct: boolean = false;
  productData = [
    {
      _3dImage: "../../assets/product-1.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-2.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-3.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-4.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-1.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-2.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-1.png",
      _2dImage: "../../assets/product-1-3d.png"
    }
  ]

  constructor( public _global:GlobalService) { }

  ngOnInit(): void {
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

  clickProduct(event: any, i: any) {
    this.showProduct = true;
    this.activeIndex = i;
    this.activeProduct = "../../" + event.target.src.slice(event.target.src.indexOf("assets"))
  }

  hideProduct() {
    this.activeIndex = -1
    this.showProduct = false
  }

}
