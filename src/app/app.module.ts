import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './shared/board/board.component';
import { ButtonComponent } from './shared/button/button.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './features/login/login.component';
import { InputComponent } from './shared/input/input.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DetailsComponent } from './features/details/details.component';
import { MenuButtonComponent } from './shared/menu-button/menu-button.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { TasksListComponent } from './shared/tasks-list/tasks-list.component';
import { TaskComponent } from './shared/task/task.component';
import { ContextMenuComponent } from './shared/context-menu/context-menu.component';

import { StoreModule } from '@ngrx/store';
import { loginReducer } from './features/login/login.reducer';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { boardsReducer } from './features/dashboard/dashboard.reducer';
import { detailsReducer } from './features/details/details.reducer';
import { ModalWindowComponent } from './shared/modal-window/modal-window.component';
import { FormAddBoardComponent } from './shared/form-add-board/form-add-board.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ButtonsBlockComponent } from './shared/buttons-block/buttons-block.component';
import { FormEditBoardComponent } from './shared/form-edit-board/form-edit-board.component';
import { FormAddDetailsComponent } from './shared/form-add-details/form-add-details.component';
import { FormEditDetailComponent } from './shared/form-edit-detail/form-edit-detail.component';
import { FilterComponent } from './shared/filter/filter.component';
import { SignupComponent } from './features/signup/signup.component';
import { FormAddCommentComponent } from './shared/form-add-comment/form-add-comment.component';
import { CommentComponent } from './shared/comment/comment.component';
import { commentsReducer } from './shared/task/task.reducer';
import { TaskFilterPipe } from './shared/task/task.pipe';
import { TaskFilterSyncPipe } from './shared/task/task-filter-sync.pipe';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ButtonComponent,
    HeaderComponent,
    LoginComponent,
    InputComponent,
    DashboardComponent,
    DetailsComponent,
    MenuButtonComponent,
    AvatarComponent,
    TasksListComponent,
    TaskComponent,
    ContextMenuComponent,
    NotFoundComponent,
    ModalWindowComponent,
    FormAddBoardComponent,
    ButtonsBlockComponent,
    FormEditBoardComponent,
    FormAddDetailsComponent,
    FormEditDetailComponent,
    FilterComponent,
    SignupComponent,
    FormAddCommentComponent,
    CommentComponent,
    TaskFilterPipe,
    TaskFilterSyncPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ user: loginReducer, dashboard: boardsReducer, details: detailsReducer, comments: commentsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
