import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationEducationComponent } from './inspiration-education.component';

describe('InspirationEducationComponent', () => {
  let component: InspirationEducationComponent;
  let fixture: ComponentFixture<InspirationEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
