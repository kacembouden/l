import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpengComponent } from './ampeng.component';

describe('AmpengComponent', () => {
  let component: AmpengComponent;
  let fixture: ComponentFixture<AmpengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
