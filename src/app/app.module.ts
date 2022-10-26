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
import { ButtonsListComponent } from './shared/buttons-list/buttons-list.component';
import { MenuButtonComponent } from './shared/menu-button/menu-button.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { TasksListComponent } from './shared/tasks-list/tasks-list.component';
import { TaskComponent } from './shared/task/task.component';



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
    ButtonsListComponent,
    MenuButtonComponent,
    AvatarComponent,
    TasksListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
