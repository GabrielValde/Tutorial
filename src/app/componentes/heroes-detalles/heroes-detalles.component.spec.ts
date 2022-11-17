import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetallesComponent } from './heroes-detalles.component';

describe('HeroesDetallesComponent', () => {
  let component: HeroesDetallesComponent;
  let fixture: ComponentFixture<HeroesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
