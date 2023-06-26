import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CribCardComponent } from './crib-card.component';

describe('CribCardComponent', () => {
  let component: CribCardComponent;
  let fixture: ComponentFixture<CribCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CribCardComponent]
    });
    fixture = TestBed.createComponent(CribCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
