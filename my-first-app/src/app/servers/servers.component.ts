import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "test server name"
  constructor() { 
    // setTimeout(() => {}, 2000);
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created !";
  }

  // $event !!!           typu any 
  onUpdateServerName(event: any){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
