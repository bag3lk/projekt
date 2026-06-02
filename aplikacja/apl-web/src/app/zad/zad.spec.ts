import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad } from './zad';

describe('Zad', () => {
  let component: Zad;
  let fixture: ComponentFixture<Zad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
