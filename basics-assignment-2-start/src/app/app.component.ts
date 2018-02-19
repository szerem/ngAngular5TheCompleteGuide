import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "";
  allowNewUser = (this.userName.length > 0);
  
  onCreateUser(){
    this.userName = ""
    this.allowNewUser = (this.userName.length > 0);
  }

  onInput(event:any){
    this.allowNewUser = (this.userName.length > 0);
  }
}


