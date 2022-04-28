import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSinkComponent } from './product-sink.component';

describe('ProductSinkComponent', () => {
  let component: ProductSinkComponent;
  let fixture: ComponentFixture<ProductSinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
