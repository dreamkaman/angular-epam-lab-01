import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentItem } from './task.reducer';

@Pipe({
  name: 'taskFilter',
  pure: false
})

export class TaskFilterPipe implements PipeTransform {

  transform(comments: Observable<CommentItem[]>, idTask: string): any {
    comments.subscribe(comments => {

      const filteredComments = comments.filter(comment => comment.detailId === idTask);

      console.log(idTask);
      console.log(filteredComments);
      return filteredComments
    });

  }

}
