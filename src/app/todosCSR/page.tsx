"use client";

import { useQueryTodo } from "@/hooks/useTodoQuerys";
import { Todos } from "@/types/type";
import React from "react";

const TodosCSR = () => {
  const { data, isLoading, isError } = useQueryTodo();
  console.log(data);

  if (isLoading) {
    return <div>무야호</div>;
  }

  if (isError) {
    return <>넌 나가라</>;
  }

  return (
    <div>
      {data.map((todos: Todos) => {
        return (
          <div key={todos.id}>
            <h2>{todos.title}</h2>
            <p>{todos.contents}</p>
            {data.isDone ? <p>Done</p> : <p>Not Done</p>}
          </div>
        );
      })}
    </div>
  );
};

export default TodosCSR;
