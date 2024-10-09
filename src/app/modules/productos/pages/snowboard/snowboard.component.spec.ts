import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowboardComponent } from './snowboard.component';

describe('SnowboardComponent', () => {
  let component: SnowboardComponent;
  let fixture: ComponentFixture<SnowboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnowboardComponent]
    });
    fixture = TestBed.createComponent(SnowboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
