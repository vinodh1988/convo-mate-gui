import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatedslotComponent } from './translatedslot.component';

describe('TranslatedslotComponent', () => {
  let component: TranslatedslotComponent;
  let fixture: ComponentFixture<TranslatedslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatedslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslatedslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
