import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() onSidebarToggle = new EventEmitter<boolean>()
  toggled = false

  constructor() { }

  ngOnInit() {
  }

  // handle click button that toggle sidebar
  sidebarToggle() {
    this.toggled = !this.toggled
    this.onSidebarToggle.emit(this.toggled)
  }

}
