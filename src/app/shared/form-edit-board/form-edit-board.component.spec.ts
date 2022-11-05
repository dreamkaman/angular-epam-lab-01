import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditBoardComponent } from './form-edit-board.component';

describe('FormEditBoardComponent', () => {
  let component: FormEditBoardComponent;
  let fixture: ComponentFixture<FormEditBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
