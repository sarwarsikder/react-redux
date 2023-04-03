import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {fetchTodo, fetchTodos} from "../../store/todo-action";

const Todo = () => {
    const [todoId, setDotoId] = useState(1)
    const dispatch = useAppDispatch();
    const allTodos = useAppSelector(state => state.todo.todos);
    const todo = useAppSelector(state => state.todo.todo);
    const clickHandler = () => {
        dispatch(fetchTodos())
    }

    const searchHandler = () => {
        dispatch(fetchTodo(todoId))
    }

    const checkTodo = (): boolean => {
        if (allTodos.length == 0) {
            return false
        }
        return true
    }

    const checkParticularTodo = (): boolean => {
        if (todo.id === 0) {
            return false
        }
        return true
    }

    return (
        <>
            <div>
                <label>Enter the todo id : </label>
                <input onChange={(event) => {
                    setDotoId(parseInt(event.target.value))
                }} type="number"></input>
                <button onClick={searchHandler}> Find</button>
                <div>
                    <h3>Particular TODO </h3>
                    {
                        checkParticularTodo() &&
                        (<div className="todo-container" key={todo.id}>
                            <p className="todo-child1">{todo.id}</p>
                            <p className="todo-child2">{todo.UserId}</p>
                            <p className="todo-child3">{todo.title}</p>
                            <p className="todo-child4">{todo.completed}</p>
                        </div>)
                    }

                </div>
            </div>
            <div>
                <button onClick={clickHandler}>All Todos</button>
                <div>
                    <h3>TODO LIST :</h3>
                    <div className="todo-container">
                        <p className="todo-child1">ID</p>
                        <p className="todo-child2">USER ID</p>
                        <p className="todo-child3">TITLE</p>
                    </div>
                    {checkTodo() &&
                        allTodos.map((todo) => (
                            <div className="todo-container" key={todo.id}>
                                <p className="todo-child1">{todo.id}</p>
                                <p className="todo-child2">{todo.UserId}</p>
                                <p className="todo-child3">{todo.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Todo;

