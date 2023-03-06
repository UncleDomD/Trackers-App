import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunTableComponent } from './gun-table.component';

describe('GunTableComponent', () => {
  let component: GunTableComponent;
  let fixture: ComponentFixture<GunTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GunTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
