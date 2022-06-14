import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesOtherComponent } from './promises.component';

describe('PromisesComponent', () => {
  let component: PromisesOtherComponent;
  let fixture: ComponentFixture<PromisesOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
