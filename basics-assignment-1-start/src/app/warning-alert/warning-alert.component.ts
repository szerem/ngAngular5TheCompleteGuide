import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.css']
  template : `
    <p>warning-alert works!</p>
  `,
  styles : [`p {
    padding: 20px;
    background-color: mistyrose;
    border: 1px solid red;
    color: red;
    text-transform: uppercase;
  }`]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
