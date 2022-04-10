import { Component, OnInit } from '@angular/core';
import { LocationData } from './locationData';

@Component({
  selector: 'app-where-to-buy',
  templateUrl: './where-to-buy.component.html',
  styleUrls: ['./where-to-buy.component.scss']
})
export class WhereToBuyComponent implements OnInit {

  locationData = LocationData;
  selectedCountry = "Taiwan"
  selectedState = "Taiwan"

  constructor() { }

  ngOnInit(): void {
  }


  getFilteredLoations() {
    return this.locationData.filter(x => x.country == this.selectedCountry && x.state == this.selectedState)
  }

}
