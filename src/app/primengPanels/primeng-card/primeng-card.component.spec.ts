import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengCardComponent } from './primeng-card.component';

describe('PrimengCardComponent', () => {
  let component: PrimengCardComponent;
  let fixture: ComponentFixture<PrimengCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
