import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() label = '';
  @Input() redirect = '';
  @Input() routerLinkActive = '';
  @Output() onClick = new EventEmitter();

  get redirectLink() {
    return this.redirect;
  }

  get buttonClass() {
    return `size-${this.size} theme-${this.theme}`;
  }
}
