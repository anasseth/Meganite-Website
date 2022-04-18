import { Component, OnInit } from '@angular/core';
import { LocationData } from './locationData';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-where-to-buy',
  templateUrl: './where-to-buy.component.html',
  styleUrls: ['./where-to-buy.component.scss']
})
export class WhereToBuyComponent implements OnInit {

  locationData = LocationData;
  selectedCountry = "Taiwan";
  selectedState = "Taiwan";
  zoom: number = 13;
  lat: number = 23.6978;
  lng: number = 120.9605;
  outletsCopy: any;
  region: any[] = [
    {
      country: "Europe",
      state: "Europe",
      lat: 53.7260,
      lng: 15.2551
    },
    {
      country: "Taiwan",
      state: "Taiwan",
      lat: 23.6978,
      lng: 120.9605
    }
  ]
  outlets: marker[] = [
    {
      outletName: "RICHELIEU",
      lat: 53.7360,
      lng: 15.2651,
      label: 'A',
      draggable: false,
      country: "Europe",
      state: "Europe"
    },
    {
      outletName: "Kurt Lautenschlager GmbH & Co.KG (KULA)",
      lat: 53.7160,
      lng: 15.2451,
      label: 'B',
      draggable: false,
      country: "Europe",
      state: "Europe"
    },
    {
      outletName: "RICHELIEU SAVANNAH",
      lat: 53.7460,
      lng: 15.2351,
      label: 'C',
      draggable: false,
      country: "Europe",
      state: "Europe"
    },

    {
      outletName: "Kurt Lautenschlager GmbH & Co.KG (KULA)",
      lat: 23.69692537,
      lng: 120.9607493,
      label: 'A',
      draggable: true,
      country: "Taiwan",
      state: "Taiwan"
    },
    {
      outletName: "RICHELIEU",
      lat: 23.67318,
      lng: 120.961873,
      label: 'B',
      draggable: false,
      country: "Taiwan",
      state: "Taiwan"
    },
    {
      outletName: "RICHELIEU SAVANNAH",
      lat: 23.68615935,
      lng: 120.95944,
      label: 'C',
      draggable: true,
      country: "Taiwan",
      state: "Taiwan"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.outletsCopy = JSON.parse(JSON.stringify(this.outlets));
    this.outlets = this.outlets.filter(x => x.country == this.selectedCountry)
  }

  getFilteredLoations() {
    return this.locationData.filter(x => x.country == this.selectedCountry && x.state == this.selectedState)
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: any) {
    var event = $event as MouseEvent;
    console.log("Lat : ", event.coords.lat)
    console.log("Long : ", event.coords.lng)
    this.outlets.push({
      lat: event.coords.lat,
      lng: event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: any) {
    var event = $event as MouseEvent;
    console.log('dragEnd', m, event);
  }


  filterLocations(event: any) {
    var value = event.target.value;
    var country: any = this.region.filter((x: any) => x.country == this.selectedCountry)
    this.outlets = this.outletsCopy.filter((x: any) => x.country == this.selectedCountry)
    this.selectedState = value
    this.lat = country[0].lat
    this.lng = country[0].lng
  }
}

interface marker {
  outletName?: any;
  lat: number;
  lng: number;
  label?: any;
  draggable: boolean;
  country?: any;
  state?: any;
}
