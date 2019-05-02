import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div id="header" >
    <img src="https://via.placeholder.com/150/ff0000/FFFFFF/?text=J">
    {{title}}
  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "JPOP-UI";

  constructor() { }

  ngOnInit() {
  }

}
