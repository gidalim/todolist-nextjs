"use client";

import { Todo } from "@/types/type";
import React from "react";

type TodoItems = {
  data: Todo;
  handleDeleteButtonClick: (id: string) => void;
  handleUpdateButtonClick: (id: string, isDone: boolean) => void;
};

export const TodoRender: React.FC<TodoItems> = ({
  data,
  handleDeleteButtonClick,
  handleUpdateButtonClick,
}) => {
  return (
    <div className="min-w-60" key={data.id}>
      <button className="p-2" onClick={() => handleDeleteButtonClick(data.id)}>
        삭제
      </button>
      <h3 className="p-2">{data.title}</h3>
      <p className="p-2">{data.contents}</p>
      <button
        className={`${
          data.isDone ? `bg-red-500` : `bg-blue-600`
        } rounded-md p-2`}
        onClick={() => handleUpdateButtonClick(data.id, data.isDone)}
      >
        {data.isDone ? "Not Done" : " Done"}
      </button>
    </div>
  );
};
