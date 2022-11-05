import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardItem } from 'src/app/features/dashboard/dashboard.reducer';
import { DashboardService } from 'src/app/features/dashboard/dashboard.service';
import { GlobalState } from 'src/store/models/login.model';
import * as dashboardActions from '../../features/dashboard/dashboard.actions';
import { FormEditBoardService } from '../form-edit-board/form-edit-board.service';
import { ModalWindowService } from '../modal-window/modal-window.service';

@Component({
  selector: 'app-buttons-block',
  templateUrl: './buttons-block.component.html',
  styleUrls: ['./buttons-block.component.scss']
})



export class ButtonsBlockComponent implements OnInit {
  @Input() boardId: string = '';

  constructor(
    private dashboardService: DashboardService,
    private store: Store<GlobalState>,
    private modalWindowService: ModalWindowService,
    private formEditBoardService: FormEditBoardService) { }

  ngOnInit(): void {

  }

  onEditClick(_event: Event, boardId: string) {

    this.modalWindowService.openEditBoard();

    this.formEditBoardService.setBoardId(boardId);


    // this.dashboardService.patchBoard()
    //   .subscribe({
    //     next: responseData => {
    //       console.log(responseData);

    //       const board: BoardItem = responseData as BoardItem;

    //       this.store.dispatch(dashboardActions.patchBoard({ board }));
    //     },
    //     error: err => console.log(err)
    //   });
  }

  onDeleteClick(_event: Event) {

    this.dashboardService.deleteBoard(this.boardId)
      .subscribe({
        next: responseData => {
          const { boardId } = responseData as { boardId: string };

          this.store.dispatch(dashboardActions.deleteBoard({ id: boardId }))
        },
        error: err => console.log(err)
      })

  }

}
