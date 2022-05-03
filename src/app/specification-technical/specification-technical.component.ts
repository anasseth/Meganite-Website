import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-specification-technical',
  templateUrl: './specification-technical.component.html',
  styleUrls: ['./specification-technical.component.scss']
})
export class SpecificationTechnicalComponent implements OnInit {

  Download = faDownload
  faEnvelop = faEnvelope;
  faMapMarker = faMapMarkerAlt;
  faCartPlus = faCartPlus;
  Right = faAngleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
