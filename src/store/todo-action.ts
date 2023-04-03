import todoSlice from "./todo-slice";
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {TodoModel} from "../models/redux-model";
import todoService from "../service/todoService";
import TodoService from "../service/todoService";

export const todoActions = todoSlice.actions;

export const fetchTodos = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState, extraArgument) => {
        if (getState().todo.todos.length === 0) {
            const response: TodoModel[] = await todoService.getAllToDos()
            dispatch(todoActions.setTodos(response));
        }
    }
}

export const fetchTodo = (todoId: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response = await TodoService.getAllToDo(todoId);
        dispatch(todoActions.setTodo(response));
    }
}
