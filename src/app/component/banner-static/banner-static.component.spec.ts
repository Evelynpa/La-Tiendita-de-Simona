import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerStaticComponent } from './banner-static.component';

describe('BannerStaticComponent', () => {
  let component: BannerStaticComponent;
  let fixture: ComponentFixture<BannerStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
