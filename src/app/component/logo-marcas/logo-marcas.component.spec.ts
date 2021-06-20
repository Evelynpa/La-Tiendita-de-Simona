import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMarcasComponent } from './logo-marcas.component';

describe('LogoMarcasComponent', () => {
  let component: LogoMarcasComponent;
  let fixture: ComponentFixture<LogoMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
