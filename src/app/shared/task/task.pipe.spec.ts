import { TaskFilterPipe } from './task.pipe';

describe('TaskPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
