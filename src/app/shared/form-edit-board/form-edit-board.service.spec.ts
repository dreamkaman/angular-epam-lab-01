import { TestBed } from '@angular/core/testing';

import { FormEditBoardService } from './form-edit-board.service';

describe('FormEditBoardService', () => {
  let service: FormEditBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormEditBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
