import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  private _isNavMenuOpen: boolean = false;

  get isNavMenuOpen() {
    return this._isNavMenuOpen;
  }

  flipNavMenuDisplay() {
    this._isNavMenuOpen = !this._isNavMenuOpen;
  }

}
