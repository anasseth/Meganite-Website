import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { ProductImageBundle, ProductImageBundle2, ProductImageBundle3, ProductImageBundle4 } from './productData';
import { faAngleDown, faAngleUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-showcase',
  templateUrl: './product-showcase.component.html',
  styleUrls: ['./product-showcase.component.scss']
})
export class ProductShowcaseComponent implements OnInit {

  constructor(public _global: GlobalService, public router: Router) { }

  Check = faCheckCircle;
  Drop = faAngleDown;
  Up = faAngleUp;
  faAngleRight = faAngleRight;
  faCart = faCartPlus;
  Cancel = faTimes;
  activeProduct: string = "";
  showProduct: boolean = false;
  ProductImageBundle = ProductImageBundle;
  ProductImageBundle2 = ProductImageBundle2;
  ProductImageBundle3 = ProductImageBundle3;
  ProductImageBundle4 = ProductImageBundle4;
  selectedFilter: string = "";
  showFilter: boolean = false;
  filterOptions = [
    {
      name: "Collection",
      options: ["All", "Top Seller", "New", "Movement Series", "Terrazzo Series", "X-Series", "Recycled", "AcryMed"]
    },
    {
      name: "Color",
      options: ["All", "Off White", "Grey \ Black", "Beige \ Brown", "Blue \ Green \ Vivid"]
    },
    {
      name: "Size",
      options: ["Jumbo", "6mm"]
    }
  ]
  appliedFilter: any = [];

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
    var checkIfAlreadyExist = this.appliedFilter.filter((x: any) => x == name).length;
    if (checkIfAlreadyExist == 0) {
      this.appliedFilter.push(name)
    }
  }

  removeAddedFilter(name: string) {
    this.appliedFilter = this.appliedFilter.filter((x: any) => x != name)
  }

  filterOptionsData() {
    return this.filterOptions.filter(x => x.name == this.selectedFilter)[0].options
  }

  clickProduct(imgSrc: any) {
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
    this.router.navigate(["/product-detail"])
  }

  checkProductInCart(product: any) {
    return this._global.addedToCart.filter((x: any) => x.imgSrc == product.imgSrc).length
  }

}
