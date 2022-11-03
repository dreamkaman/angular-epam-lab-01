enum Status {
    "in progress",
    "todo",
    "done"
}

export interface DetailsItem {
    _id: string,
    boardId: string,
    name: string,
    status: Status
};