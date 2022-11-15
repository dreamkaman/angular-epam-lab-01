import { Pipe, PipeTransform } from '@angular/core';
import { CommentItem } from './task.reducer';

@Pipe({
  name: 'taskFilterSync'
})
export class TaskFilterSyncPipe implements PipeTransform {

  transform(comments: CommentItem[] | null, detailId: string): any {
    console.log('Pipe is working!');

    if (comments) {
      return comments.filter(comment => comment.detailId === detailId);
    }
    return null;
  }

}
