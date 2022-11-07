import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() taskName: string = '';
  @Input() idTask: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    console.log(this.idTask);

    this.taskService.setIdTask(this.idTask);
  }

}
