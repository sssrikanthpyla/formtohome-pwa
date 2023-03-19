import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.sidenav.close();
  }

  toggle() {
    this.sidenav.toggle();
  }
}
