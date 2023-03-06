import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoGamesComponent } from './lego-games.component';

describe('LegoGamesComponent', () => {
  let component: LegoGamesComponent;
  let fixture: ComponentFixture<LegoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegoGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
