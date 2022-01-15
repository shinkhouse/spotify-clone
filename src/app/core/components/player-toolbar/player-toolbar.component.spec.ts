import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerToolbarComponent } from './player-toolbar.component';

describe('PlayerToolbarComponent', () => {
  let component: PlayerToolbarComponent;
  let fixture: ComponentFixture<PlayerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
