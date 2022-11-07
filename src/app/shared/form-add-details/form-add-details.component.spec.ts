import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddDetailsComponent } from './form-add-details.component';

describe('FormAddDetailsComponent', () => {
  let component: FormAddDetailsComponent;
  let fixture: ComponentFixture<FormAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
