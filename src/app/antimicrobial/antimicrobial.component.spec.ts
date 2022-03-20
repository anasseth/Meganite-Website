import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntimicrobialComponent } from './antimicrobial.component';

describe('AntimicrobialComponent', () => {
  let component: AntimicrobialComponent;
  let fixture: ComponentFixture<AntimicrobialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntimicrobialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntimicrobialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
