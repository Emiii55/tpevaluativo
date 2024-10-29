import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardesqComponent } from './cardesq.component';

describe('CardesqComponent', () => {
  let component: CardesqComponent;
  let fixture: ComponentFixture<CardesqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardesqComponent]
    });
    fixture = TestBed.createComponent(CardesqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
