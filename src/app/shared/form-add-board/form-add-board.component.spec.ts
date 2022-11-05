import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddBoardComponent } from './form-add-board.component';

describe('FormAddBoardComponent', () => {
  let component: FormAddBoardComponent;
  let fixture: ComponentFixture<FormAddBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
