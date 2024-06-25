import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProfileMenuComponent } from './nav-profile-menu.component';

describe('NavProfileMenuComponent', () => {
  let component: NavProfileMenuComponent;
  let fixture: ComponentFixture<NavProfileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProfileMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
