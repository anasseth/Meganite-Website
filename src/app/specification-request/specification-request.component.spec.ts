import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationRequestComponent } from './specification-request.component';

describe('SpecificationRequestComponent', () => {
  let component: SpecificationRequestComponent;
  let fixture: ComponentFixture<SpecificationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificationRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
