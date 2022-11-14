import { Pipe, PipeTransform } from '@angular/core';
import { CommentItem } from './task.reducer';

@Pipe({
  name: 'taskFilterSync'
})
export class TaskFilterSyncPipe implements PipeTransform {

  transform(comments: CommentItem[], detailId: string): any {

    return comments.filter(comment => comment.detailId === detailId);
  }

}
