import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourComponent } from './flavour.component';

describe('FlavourComponent', () => {
  let component: FlavourComponent;
  let fixture: ComponentFixture<FlavourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
