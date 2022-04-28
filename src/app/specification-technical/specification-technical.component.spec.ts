import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationTechnicalComponent } from './specification-technical.component';

describe('SpecificationTechnicalComponent', () => {
  let component: SpecificationTechnicalComponent;
  let fixture: ComponentFixture<SpecificationTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificationTechnicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
