import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationCommercialComponent } from './inspiration-commercial.component';

describe('InspirationCommercialComponent', () => {
  let component: InspirationCommercialComponent;
  let fixture: ComponentFixture<InspirationCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
