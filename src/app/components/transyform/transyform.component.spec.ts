import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransyformComponent } from './transyform.component';

describe('TransyformComponent', () => {
  let component: TransyformComponent;
  let fixture: ComponentFixture<TransyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransyformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
