import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTastesComponent } from './food-tastes.component';

describe('FoodTastesComponent', () => {
  let component: FoodTastesComponent;
  let fixture: ComponentFixture<FoodTastesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTastesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTastesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
