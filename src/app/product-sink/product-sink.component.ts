import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { ProductImageBundle } from './sink.data';
import {
  faMapMarkerAlt,
  faEnvelope,
  faCartPlus,
  faTimes,
  faAngleRight,
  faAngleDown,
  faAngleUp,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-sink',
  templateUrl: './product-sink.component.html',
  styleUrls: ['./product-sink.component.scss']
})
export class ProductSinkComponent implements OnInit {

  faEnvelop = faEnvelope;
  faMapMarker = faMapMarkerAlt;
  faCartPlus = faCartPlus;
  Check = faCheckCircle;
  Drop = faAngleDown;
  Up = faAngleUp;
  faAngleRight = faAngleRight;
  faCart = faCartPlus;
  activeProductIndex: any = -1;
  Cancel = faTimes;
  activeProduct: string = "";
  showProduct: boolean = false;
  ProductImageBundle = ProductImageBundle;
  selectedFilter: string = "";
  showFilter: boolean = false;
  filterOptions = [
    {
      name: "Sink",
      options: ["Single", "Medical", "Trough"]
    },
  ]
  appliedFilter: any = [];

  constructor(
    public _global: GlobalService, public router: Router
  ) { }

  ngOnInit(): void {
  }

  selectFilter(name: any) {
    if (name == this.selectedFilter) {
      this.showFilter = false;
      this.selectedFilter = "";
    }
    else {
      this.selectedFilter = name;
      this.showFilter = true
    }
  }

  checkIfFilterSelected(name: string) {
    var check = this.appliedFilter.filter((x: any) => x == name).length;
    if (check == 0) {
      return false;
    }
    else {
      return true;
    }
  }

  addSelectedFilter(name: string) {
    if (this.checkIfFilterSelected(name) == false) {
      this.appliedFilter.length = 0
      this.appliedFilter.push(name)
    }
    else {
      this.removeAddedFilter(name)
    }
  }

  removeAddedFilter(name: string) {
    this.appliedFilter = this.appliedFilter.filter((x: any) => x != name)
  }

  filterOptionsData() {
    return this.filterOptions.filter(x => x.name == this.selectedFilter)[0].options
  }

  clickProduct(imgSrc: any, index: any) {
    this.activeProductIndex = index
    this.showProduct = true;
    this.activeProduct = imgSrc;
  }

  hideProduct() {
    this.activeProduct = ""
    this.showProduct = false
  }

  addToCart(obj: any) {
    var checkIfProductAlreadyExist = this._global.addedToCart.filter((x: any) => x.imgSrc == obj.imgSrc).length;
    if (checkIfProductAlreadyExist == 0) {
      this._global.addedToCart.push(obj)
    }
  }

  checkProductDetail(obj: any) {
    this._global.activeImagePath = obj.imgSrc;
    this.router.navigate(["/product/detail"])
  }

  checkProductInCart(product: any) {
    return this._global.addedToCart.filter((x: any) => x.imgSrc == product.imgSrc).length
  }

  applyFilter() {
    this.showFilter = false;
  }

  clearFilter() {
    this.appliedFilter = [];
  }
}
