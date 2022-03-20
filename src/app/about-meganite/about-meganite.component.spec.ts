import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeganiteComponent } from './about-meganite.component';

describe('AboutMeganiteComponent', () => {
  let component: AboutMeganiteComponent;
  let fixture: ComponentFixture<AboutMeganiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeganiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeganiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
