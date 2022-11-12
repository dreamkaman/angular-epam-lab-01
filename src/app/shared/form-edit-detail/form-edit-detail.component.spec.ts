import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditDetailComponent } from './form-edit-detail.component';

describe('FormEditDetailComponent', () => {
  let component: FormEditDetailComponent;
  let fixture: ComponentFixture<FormEditDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
