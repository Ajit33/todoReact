import React, { createContext, useContext } from "react";

const TodoContext=createContext({
    todos:[
        {
           id:1,
           todo:"Todo Message",
           completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    delete:(id)=>{},
    toggleComplete:(id)=>{}
});
export default TodoContext;

export const UseTodo=()=>{
    return useContext(TodoContext)
}
export const Todoprovider=TodoContext.Provider