export interface TodoModel {
    'UserId': number,
    'id': number,
    'title': string,
    'completed': boolean
}

export interface TodoDataModel {
    todos: TodoModel[],
    todo: TodoModel
}