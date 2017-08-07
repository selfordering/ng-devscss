import { Component, OnInit, OnChanges, Input } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() toggled: boolean;
  private firstTime = true

  constructor() { }

  ngOnInit() {
  }

  //
  ngOnChanges(changes){
    // For one property change
    for (let ch in changes){
      let changedProp = changes[ch]
      let to = JSON.stringify(changedProp.currentValue)
      this.toggled = to == "true" // convert string "true" to boolean true
    }
    console.log("this.toggled: ", this.toggled)
    
    // to hide sidebar when page first load
    if(this.toggled){
      this.openSidebar()
    }else {
      if(!this.firstTime){
        console.log("open small sidebar")
        this.openSmallSidebar()
      }
    }
    this.firstTime = false
   
  }

    // open sidebar
  openSidebar() {
    $("#mySidenav").css("width", "200px")
    $(".atext").css("font-size", "18px")
    $(".navicon").css("font-size", "18px")
    $(".profileText").css("display", "inline-block") // show profile text
    $("#profile").css("padding-left", "60px")
    $("#profile").css("height", "90px")
  }

 

  // open small sidebar
  openSmallSidebar() {
     $("#mySidenav").css("width", "70px")
     $(".navicon").css("font-size", "40px")
     $(".atext").css("font-size", "10px")
     $(".profileText").css("display", "none") // hide profile text
     $("#profile").css("padding-left", "0px")
     $("#profile").css("height", "50px")
  }

  // Close sidebar
  closeSidebar() {
    $("#mySidenav").css("width", "0px")
  }

  // handle restaurant click event
  onClick(toggleclass) {
    console.log(toggleclass)
    //$(".res-data").toggleClass("show-data")
    $("."+toggleclass).slideToggle()
  }

}
