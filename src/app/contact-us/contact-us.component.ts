import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  qty=[10,10,10,10,10,10,10,10,10,10,10,10]
  constructor() { }

  ngOnInit(): void {
  }

  decrement(i:any){
    this.qty[i] = this.qty[i] -1
  }

  increment(i:any){
    this.qty[i] = this.qty[i] +1
  }

}
