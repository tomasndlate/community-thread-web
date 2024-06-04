import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  @Output('onRouting') onRouting = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.emitOnRouting();
  }

  emitOnRouting() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        this.onRouting.emit();
    });
  }
}
