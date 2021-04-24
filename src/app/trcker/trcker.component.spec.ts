import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrckerComponent } from './trcker.component';

describe('TrckerComponent', () => {
  let component: TrckerComponent;
  let fixture: ComponentFixture<TrckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
