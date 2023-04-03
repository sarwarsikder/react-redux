import API from "./api";
import {TodoModel} from "../models/redux-model";

export default {
    async getAllToDos() {
        var response = await API().get('todos');
        return response.data
    },
    async getAllToDo(todo_id: number) {
        var response = await API().get('todos');
        return response.data.filter((todo: TodoModel) => todo.id === todo_id)[0];
    }
}