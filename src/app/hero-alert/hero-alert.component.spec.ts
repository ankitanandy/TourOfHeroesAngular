import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAlertComponent } from './hero-alert.component';

describe('HeroAlertComponent', () => {
  let component: HeroAlertComponent;
  let fixture: ComponentFixture<HeroAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
