"use client";

import { Todos } from "@/types/type";
import React from "react";

type TodoItems = {
  data: Todos;
  handleDeleteButtonClick: (id: string) => void;
  handleUpdateButtonClick: (id: string, isDone: boolean) => void;
};

export const TodoRender: React.FC<TodoItems> = ({
  data,
  handleDeleteButtonClick,
  handleUpdateButtonClick,
}) => {
  return (
    <div key={data.id}>
      <button onClick={() => handleDeleteButtonClick(data.id)}>삭제</button>
      <h3>{data.title}</h3>
      <p>{data.contents}</p>
      <button onClick={() => handleUpdateButtonClick(data.id, data.isDone)}>
        {data.isDone ? "Not Done" : " Done"}
      </button>
    </div>
  );
};
