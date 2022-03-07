import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  showPopup: boolean = false;
  showRegion: boolean = false;
  addedToCart: any = [];
  activeImagePath: string = "../../assets/product-Detail-HD.png"

  constructor() { }
}
