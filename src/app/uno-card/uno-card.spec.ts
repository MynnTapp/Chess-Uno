import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoCard } from './uno-card';

describe('UnoCard', () => {
  let component: UnoCard;
  let fixture: ComponentFixture<UnoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
