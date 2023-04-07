import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFormUpdateComponent } from './brand-form-update.component';

describe('BrandFormUpdateComponent', () => {
  let component: BrandFormUpdateComponent;
  let fixture: ComponentFixture<BrandFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
