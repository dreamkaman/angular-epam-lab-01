
export interface DetailsItem {
    _id: string,
    boardId: string,
    name: string,
    status: 'todo' | 'in progress' | 'done'
};
