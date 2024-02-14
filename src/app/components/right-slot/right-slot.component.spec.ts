import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSlotComponent } from './right-slot.component';

describe('RightSlotComponent', () => {
  let component: RightSlotComponent;
  let fixture: ComponentFixture<RightSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
