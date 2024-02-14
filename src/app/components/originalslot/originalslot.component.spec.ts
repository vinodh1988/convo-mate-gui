import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalslotComponent } from './originalslot.component';

describe('OriginalslotComponent', () => {
  let component: OriginalslotComponent;
  let fixture: ComponentFixture<OriginalslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginalslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginalslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
