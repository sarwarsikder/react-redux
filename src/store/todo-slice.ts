import {TodoDataModel, TodoModel} from "../models/redux-model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialTodoState: TodoDataModel = {
    todos: [],
    todo: {
        'UserId': 0,
        'id': 0,
        'title': '',
        'completed': false
    }
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodoState,
    reducers: {
        setTodos(state, action: PayloadAction<TodoModel[]>) {
            state.todos = action.payload;
        },
        setTodo(state, action: PayloadAction<TodoModel>) {
            state.todo = action.payload;
        }
    }
});

export default todoSlice;