import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomrowComponent } from './roomrow.component';

describe('RoomrowComponent', () => {
  let component: RoomrowComponent;
  let fixture: ComponentFixture<RoomrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
