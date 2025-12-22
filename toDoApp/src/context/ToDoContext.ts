import { createContext, useContext } from "react";

export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
}

export interface ToDoContextType {
    todos: Todo[];
    addToDo: (todo: string) => void;
    updateToDo: (id: number, todo: string) => void;
    deleteToDo: (id: number) => void;
    toggleComplete: (id: number) => void;
}
export const ToDoContext = createContext<ToDoContextType>({
    todos: [],
    addToDo: (todo: string) => { },
    updateToDo: (id: number, todo: string) => { },
    deleteToDo: (id: number) => { },
    toggleComplete: (id: number) => { }
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDo = () => {
    return useContext(ToDoContext);
}