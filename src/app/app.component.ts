import { Component, EventEmitter, Input, Output } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggled

  onSidebarToggle(toggle) {
    console.log("toggle on parent: ", toggle)
    // pass toggle that come from navbar to sidebar as an input
    this.toggled = toggle

    if(this.toggled){
      $("#navAndContent").css("margin-left", "200px")
    }else {
      $("#navAndContent").css("margin-left", "70px")
    }
  }
}
